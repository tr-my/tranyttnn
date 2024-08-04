
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Categogy.css';
import editIcon from '../Assets/sua.png';
import Xoaicon from '../Assets/xoa.png'

const initialCategories = [
    { ten: 'user1', id: 'user1@gmail.com', trangThai: true },
    { ten: 'user2', id: 'user2@gmail.com', trangThai: false },
    { ten: 'user3', id: 'user3@gmail.com', trangThai: true },
    { ten: 'user4', id: 'user4@gmail.com', trangThai: false },
    { ten: 'user5', id: 'user5@gmail.com', trangThai: true },
    { ten: 'user6', id: 'user6@gmail.com', trangThai: false }
];

function Categogy() {
    const [categories, setCategories] = useState(() => {
        const storedCategories = JSON.parse(localStorage.getItem('categories')) || initialCategories;
        return storedCategories;
    });
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [cateToDelete, setCateToDelete] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(categories));
    }, [categories]);

    const handleDelete = () => {
        setCategories(prev => prev.filter(cate => cate.id !== cateToDelete.id));
        setShowDeleteModal(false);
    };

    const openDeleteModal = (cate) => {
        setCateToDelete(cate);
        setShowDeleteModal(true);
    };

    return (
        <div className="categogy-page">
            <h1>Danh sách loại sản phẩm</h1>
            <table className="categogy-table">
                <thead>
                    <tr>
                        <th>Mã loại sản phẩm</th>
                        <th>Tên loại sản phẩm</th>
                        <th>Trạng thái</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((cate, index) => (
                        <tr key={index}>
                            <td>{cate.id}</td>
                            <td>{cate.ten}</td>
                            <td>
                                <label className="toggle-switch">
                                    <input type="checkbox" defaultChecked={cate.trangThai} disabled />
                                    <span className="slider"></span>
                                </label>
                            </td>
                            <td>
                                <Link to={`/categogy/edit/${cate.id}`} className="lev"><img src={editIcon} alt="Edit" /></Link>
                                <button className="lev" onClick={() => openDeleteModal(cate)}>
                                    <img src={Xoaicon} alt="lev" />
                                </button>


                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/categogy/add" className="add-account-button">+ Thêm loại sản phẩm</Link>
            {showDeleteModal && (
                <div className="delete-modal">
                    <div className="delete-modal-content">
                        <h1>Xóa</h1>
                        <p>Bạn có muốn xóa không?</p>
                        <div className="modal-buttons">
                            <button className="delete-button" onClick={handleDelete}>Xóa</button>
                            <button className="cancel-button" onClick={() => setShowDeleteModal(false)}>Huỷ</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Categogy;






