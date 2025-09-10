import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../utils/auth';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    contact: '',
    email: '',
    loginId: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = signup(form);
    if (success) {
      setMessage('Signup successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
    } else {
      setMessage('User already exists with this Login ID.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow" style={{ maxWidth: 600 }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Sign Up</h2>
          {message && <div className="alert alert-info">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <input type="text" name="firstName" className="form-control" placeholder="First Name" required onChange={handleChange} />
              </div>
              <div className="col">
                <input type="text" name="lastName" className="form-control" placeholder="Last Name" required onChange={handleChange} />
              </div>
            </div>
            <div className="mb-3">
              <select name="gender" className="form-select" required onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <input type="tel" name="contact" className="form-control" placeholder="Contact Number" required onChange={handleChange} />
            </div>
            <div className="mb-3">
              <input type="email" name="email" className="form-control" placeholder="Email ID" required onChange={handleChange} />
            </div>
            <div className="mb-3">
              <input type="text" name="loginId" className="form-control" placeholder="Login ID" required onChange={handleChange} />
            </div>
            <div className="mb-3">
              <input type="password" name="password" className="form-control" placeholder="Password" required onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            <p className="text-center mt-3">Already have an account? <a href="/login">Login</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
