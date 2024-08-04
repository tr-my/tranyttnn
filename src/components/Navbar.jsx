import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { logout } from '../components/auth';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    return (
        <div className="navbar">
            <input type="text" placeholder="Tìm kiếm" className="search-bar" />
            <p className="welcome-text">Welcome to TUTI Shop - Giao diện quản lý</p>
            <button className="logout" onClick={handleLogout}>Đăng xuất</button>


        </div>
    );
};

export default Navbar;
