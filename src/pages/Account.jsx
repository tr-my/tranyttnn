// src/pages/Account.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Account.css';
import editIcon from '../Assets/sua.png';
import Xoaicon from '../Assets/xoa.png'



function Account() {
    const [accounts, setAccounts] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [accountToDelete, setAccountToDelete] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const initialAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
        setAccounts(initialAccounts);
    }, []);

    const handleDeleteClick = (account) => {
        setAccountToDelete(account);
        setShowDeleteModal(true);
    };

    const handleDeleteConfirm = () => {
        const updatedAccounts = accounts.filter(account => account.id !== accountToDelete.id);
        setAccounts(updatedAccounts);
        localStorage.setItem('accounts', JSON.stringify(updatedAccounts));
        setShowDeleteModal(false);
        setAccountToDelete(null);
    };

    return (
        <div className="account-container">
            <h1>Bảng nhân viên</h1>
            <table className='account-table'>
                <thead>
                    <tr>
                        <th>Mã nhân viên</th>
                        <th>Tên nhân viên</th>
                        <th>Tên tài khoản</th>
                        <th>Email</th>
                        <th>Bộ phận</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map(account => (
                        <tr key={account.id}>
                            <td>{account.employeeId}</td>
                            <td>{account.employeeName}</td>
                            <td>{account.username}</td>
                            <td>{account.email}</td>
                            <td>{account.department}</td>
                            <td>
                                <Link to={`/account/edit/${account.id}`} className="lev"><img src={editIcon} alt="Edit" /></Link>
                                <button className="lev" onClick={() => handleDeleteClick(account)}>
                                    <img src={Xoaicon} alt="lev" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/account/add" className="add-account-button">+ Thêm sản phẩm</Link>

            {showDeleteModal && (
                <div className="delete-modal">
                    <div className="delete-modal-content">
                        <h1>Xóa</h1>
                        <p>Bạn có muốn xóa không?</p>
                        <div className="modal-buttons">
                            <button className="delete-button" onClick={handleDeleteConfirm}>Xoá</button>
                            <button className="cancel-button" onClick={() => setShowDeleteModal(false)}>Huỷ</button>
                        </div>
                    </div>
                </div>
            )}
        </div>



    );
}

export default Account;

