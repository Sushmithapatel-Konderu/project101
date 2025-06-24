import React, { useState } from 'react';

const LoginModal = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await onLogin(email, password);
    if (result.success) {
      document.getElementById('login-modal').style.display = 'none';
    } else {
      alert(result.message || 'Login failed');
    }
  };

  return (
    <div id="login-modal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => document.getElementById('login-modal').style.display = 'none'}>
          &times;
        </span>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
