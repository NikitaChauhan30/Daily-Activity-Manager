import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="container mt-4">
      {children}
    </div>
  </>
);

export default Layout;
