// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from './users';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


        const user = users.find(u => u.email === email && u.password === password);

        if (user) {

            localStorage.setItem('authToken', 'your-auth-token');
            navigate('/');
        } else {
            alert('Thông tin đăng nhập không chính xác');
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit} className='dangnhap' >
                <h2>Đăng Nhập</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mật Khẩu:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='dn'>Đăng Nhập</button>
            </form>
        </div>
    );
};

export default Login;

