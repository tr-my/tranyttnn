import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Ed.css';

function EditCategory() {
    const location = useLocation();
    const navigate = useNavigate();
    const [category, setCategory] = useState(location.state ? location.state.cate : null);

    useEffect(() => {
        if (!category) {
            navigate('/categogy');
        }
    }, [category, navigate]);

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
        const updatedCategories = storedCategories.map((cate) =>
            cate.id === category.id ? category : cate
        );
        localStorage.setItem('categories', JSON.stringify(updatedCategories));
        navigate('/categogy'); // Redirect to the category list page
    };


    return (
        <form onSubmit={handleSubmit} className="edit-category-form">
            <h2>Chỉnh sửa loại sản phẩm</h2>
            <input type="text" name="id" value={category.id} onChange={handleChange} placeholder="ID" required />
            <input type="text" name="ten" value={category.ten} onChange={handleChange} placeholder="Tên" required />
            <label>
                Trạng thái
                <input type="checkbox" name="trangThai" checked={category.trangThai} onChange={handleChange} />
            </label>
            <div className="form-buttons">
                <button type="submit" className="save-button">Lưu</button>
                <button type="button" className="cancel-button" onClick={() => navigate('/categogy')}>Hủy</button>
            </div>

        </form>
    );
}

export default EditCategory;











