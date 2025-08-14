import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard(){
  const [txs,setTxs] = useState([]);
  const [summary,setSummary] = useState({income:0, expense:0});
  useEffect(()=> {
    const fetch = async ()=>{
      try{
        const token = localStorage.getItem('token');
        if(!token) return window.location='/login';
        const res = await axios.get((process.env.REACT_APP_API_URL || 'http://localhost:5000') + '/api/transactions', { headers: { Authorization: 'Bearer ' + token }});
        setTxs(res.data);
        let inc=0, exp=0;
        res.data.forEach(t => t.type === 'income' ? inc+=t.amount : exp+=t.amount);
        setSummary({income:inc, expense:exp});
      }catch(err){ console.error(err); alert('Error fetching'); }
    };
    fetch();
  }, []);
  const categoryData = () => {
    const map = {};
    txs.forEach(t => { map[t.category] = (map[t.category]||0) + t.amount; });
    return { labels: Object.keys(map), datasets: [{ data: Object.values(map) }] };
  };
  return (
    <div className="grid">
      <div className="card">
        <h2>Dashboard</h2>
        <p className="muted">Income: ₹{summary.income} • Expense: ₹{summary.expense}</p>
        <h3 style={{marginTop:16}}>Transactions</h3>
        <ul>
          {txs.map(tx => (
            <li key={tx._id} style={{padding:'8px 0', borderBottom:'1px solid #f3f4f6'}}>
              <strong>{tx.category}</strong> — {tx.description || ''} — ₹{tx.amount} <span className="muted">({new Date(tx.date).toLocaleDateString()})</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h3>Spending by Category</h3>
        <Pie data={categoryData()} />
      </div>
    </div>
  );
}
