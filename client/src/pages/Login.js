import React, {useState} from 'react';
import axios from 'axios';

export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const login = async () => {
    try{
      const res = await axios.post((process.env.REACT_APP_API_URL || 'http://localhost:5000') + '/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Logged in');
      window.location = '/';
    }catch(err){ alert(err.response?.data?.message || 'Login failed'); }
  };

  return (
    <div className="card" style={{maxWidth:480, margin:'24px auto'}}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} style={{marginTop:8}}/>
      <button onClick={login} style={{marginTop:12}}>Login</button>
    </div>
  );
}
