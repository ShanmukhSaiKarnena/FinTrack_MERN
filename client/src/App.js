import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddTransaction from './pages/AddTransaction';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <Link to="/" className="brand">FinTrack</Link>
          <nav><Link to="/add">Add</Link> | <Link to="/">Dashboard</Link></nav>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/add" element={<AddTransaction/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
