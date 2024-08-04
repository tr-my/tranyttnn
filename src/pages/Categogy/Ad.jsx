import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Add.css';

function Add() {
    const [cate, setCategory] = useState({
        id: '',
        ten: '',
        isChecked: false
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCategory((prevCategory) => ({
            ...prevCategory,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
        const updatedCategories = [...storedCategories, cate];
        localStorage.setItem('categories', JSON.stringify(updatedCategories));
        navigate('/categogy'); // Redirect to the category list page
    };

    return (
        <div div className="add-category-form">
            <h1>Thêm loại sản phẩm</h1>
            <form onSubmit={handleSubmit} className='adco-group'>
                <label>
                    Mã loại sản phẩm:
                    <input
                        type="number"
                        name="id"
                        value={cate.id}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Tên loại sản phẩm:
                    <input
                        type="text"
                        name="employeeName"
                        value={cate.employeeName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Trạng thái:
                    <input
                        type="checkbox"
                        name="isChecked"
                        checked={cate.isChecked}
                        onChange={handleChange}
                        className="toggle-input"
                    />
                    <span className="toggle-slider"></span>
                </label>

            </form>
            <div className="adco-actions">
                <button type="submit" className="thay">Lưu</button>
                <button type="button" className="thay" onClick={() => navigate('/account')}>Quay lại</button>
            </div>
        </div>

    );
}

export default Add;

