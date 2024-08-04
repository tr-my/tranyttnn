
// src/pages/Account/Add.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Add.css'

function AddAccount() {
    const [account, setAccount] = useState({
        employeeId: '',
        employeeName: '',
        username: '',
        email: '',
        department: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
        const newAccount = { ...account, id: Date.now() };
        accounts.push(newAccount);
        localStorage.setItem('accounts', JSON.stringify(accounts));
        navigate('/account');
    };

    return (
        <div className="account-form-container">
            <h1>Thêm nhân viên</h1>
            <form onSubmit={handleSubmit} className='adco-group'>
                <label>
                    Mã nhân viên:
                    <input
                        type="text"
                        name="employeeId"
                        value={account.employeeId}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Tên nhân viên:
                    <input
                        type="text"
                        name="employeeName"
                        value={account.employeeName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Tên tài khoản:
                    <input
                        type="text"
                        name="username"
                        value={account.username}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={account.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Bộ phận:
                    <input
                        type="text"
                        name="department"
                        value={account.department}
                        onChange={handleChange}
                        required
                    />
                </label>
            </form>
            <div className="adco-actions">
                <button type="submit" className="thay">Lưu</button>
                <button type="button" className="thay" onClick={() => navigate('/account')}>Quay lại</button>
            </div>
        </div>
    );
}

export default AddAccount;

