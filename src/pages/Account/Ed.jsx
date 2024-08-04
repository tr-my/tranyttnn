// src/pages/Account/Edit.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditAccount() {
    const [account, setAccount] = useState({
        employeeId: '',
        employeeName: '',
        username: '',
        email: '',
        department: '',
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
        const existingAccount = accounts.find(account => account.id === parseInt(id));
        if (existingAccount) {
            setAccount(existingAccount);
        }
    }, [id]);

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
        const updatedAccounts = accounts.map(acc => acc.id === parseInt(id) ? account : acc);
        localStorage.setItem('accounts', JSON.stringify(updatedAccounts));
        navigate('/account');
    };

    return (
        <div className="account-form-container">
            <h1>Sửa nhân viên</h1>
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
                <div className="adco-actions">
                    <button type="submit" className="thay">Lưu</button>
                    <button type="button" className="thay" onClick={() => navigate('/categogy')}>Hủy</button>
                </div>
            </form>
        </div>
    );
}

export default EditAccount;

