
// src/components/SidebarLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './SidebarLayout.css';

const SidebarLayout = () => {
  return (
    <div className="sidebar-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar /> { }
        <div className="page-content">
          <Outlet /> { }
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;

