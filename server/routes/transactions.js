const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const auth = require('../middleware/authMiddleware');
const { autoCategorize } = require('../utils/categorize');
const Razorpay = require('razorpay');

// create transaction
router.post('/', auth, async (req, res) => {
  try {
    const { amount, type, category, description, merchant, date } = req.body;
    let cat = category;
    if (!cat) cat = autoCategorize(description, merchant);
    const tx = await Transaction.create({
      user: req.userId, amount, type, category: cat, description, date
    });
    res.json(tx);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// get all transactions for user
router.get('/', auth, async (req, res) => {
  try {
    const txs = await Transaction.find({ user: req.userId }).sort({ date: -1 });
    res.json(txs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// delete
router.delete('/:id', auth, async (req, res) => {
  try {
    const tx = await Transaction.findById(req.params.id);
    if (!tx) return res.status(404).json({ message: 'Not found' });
    if (tx.user.toString() !== req.userId) return res.status(403).json({ message: 'Forbidden' });
    await tx.remove();
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Razorpay payment simulation (create order)
router.post('/create-order', auth, async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_key',
      key_secret: process.env.RAZORPAY_KEY_SECRET || 'rzp_test_secret'
    });
    const options = {
      amount: (req.body.amount || 1) * 100,  // amount in paise
      currency: "INR",
      receipt: "receipt_order_" + Date.now()
    };
    const order = await instance.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Razorpay error' });
  }
});

module.exports = router;
