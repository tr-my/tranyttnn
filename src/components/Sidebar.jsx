import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../Assets/logo.png'
import userIcon from '../Assets/user_icon.png'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile_card">
                <img src={logo} alt="Tuti Logo" className="logo" />
                <div className="user_info">
                    <img src={userIcon} alt="user icon" className="user-icon" />
                    <div className="user-text">
                        <p className="user-name">Admin</p>
                        <p className="user-role">Administrator</p>
                    </div>
                </div>
            </div>
            <ul className="sidebar-menu">
                <li><Link to="/">Tổng quan</Link></li>
                <li><Link to="/account">Nhân viên</Link></li>
                <li><Link to="/products">Sản phẩm</Link></li>
                <li><Link to="/categogy">Loại sản phẩm</Link></li>
                <li><Link to="/oder">Đơn hàng</Link></li>
                <li><Link to="/coupon">Mã giảm giá</Link></li>


            </ul>

        </div>



    );
};

export default Sidebar;
