import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';

const Login = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(loginId, password);
    if (success) {
      navigate('/');
    } else {
      setError('Invalid Login ID or Password');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow" style={{ maxWidth: 400 }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Login ID" value={loginId} onChange={(e) => setLoginId(e.target.value)} required />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button className="btn btn-success w-100" type="submit">Login</button>
            <p className="text-center mt-3">Don't have an account? <a href="/signup">Sign Up</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
