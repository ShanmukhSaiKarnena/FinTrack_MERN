import React, {useState} from 'react';
import axios from 'axios';

export default function AddTransaction(){
  const [amount,setAmount] = useState('');
  const [type,setType] = useState('expense');
  const [category,setCategory] = useState('');
  const [description,setDescription] = useState('');
  const add = async () => {
    try{
      const token = localStorage.getItem('token');
      if(!token) return window.location='/login';
      await axios.post((process.env.REACT_APP_API_URL || 'http://localhost:5000') + '/api/transactions', {
        amount: Number(amount),
        type, category, description
      }, { headers: { Authorization: 'Bearer ' + token }});
      alert('Added');
      window.location = '/';
    }catch(err){ alert(err.response?.data?.message || 'Error'); }
  };
  return (
    <div className="card" style={{maxWidth:600, margin:'24px auto'}}>
      <h3>Add Transaction</h3>
      <input placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} />
      <select value={type} onChange={e=>setType(e.target.value)} style={{marginTop:8}}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <input placeholder="Category (optional)" value={category} onChange={e=>setCategory(e.target.value)} style={{marginTop:8}} />
      <textarea placeholder="Description / Merchant" value={description} onChange={e=>setDescription(e.target.value)} style={{marginTop:8}} />
      <button onClick={add} style={{marginTop:12}}>Add</button>
    </div>
  );
}
