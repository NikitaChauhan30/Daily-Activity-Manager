import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';
import Layout from '../components/Layout';


const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Layout>
    <div className="container mt-5 text-center">
      <div className="p-4 border rounded shadow bg-light">
        <h2>Welcome, {user?.firstName} {user?.lastName}</h2>
        <p>Email: {user?.email}</p>
        <p>Gender: {user?.gender}</p>
        <p>Contact: {user?.contact}</p>
        <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
      </div>
    </div>
    </Layout>
  );
};

export default Home;
