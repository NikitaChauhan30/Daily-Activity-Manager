import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import CreateActivity from './pages/CreateActivity';
import ActivityReport from './pages/ActivityReport';
import { isAuthenticated } from './utils/auth';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={isAuthenticated() ? <Home /> : <Navigate to="/login" />} />
      <Route path="/create" element={<CreateActivity />} />
      <Route path="/report" element={<ActivityReport />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;
