// EditProduct.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Ed.css'

const EditProduct = () => {
    const [product, setProduct] = useState({
        ten: '',
        id: '',
        lsp: '',
        sl: '',
        gia: '',
        ngayban: ''
    });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const product = JSON.parse(localStorage.getItem('product')) || [];
        const existingAccount = product.find(prod => prod.id === parseInt(id));
        if (existingAccount) {
            setProduct(existingAccount);
        }

    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/products');
    };

    return (
        <div className="EditProduct-page">
            <h1>Chỉnh Sửa Sản Phẩm</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Tên:
                    <input type="text" name="ten" value={product.ten} onChange={handleChange} required />
                </label>
                <label>
                    Mã sản phẩm:
                    <input type="text" name="id" value={product.id} readOnly />
                </label>
                <label>
                    Loại sản phẩm:
                    <input type="text" name="lsp" value={product.lsp} onChange={handleChange} required />
                </label>
                <label>
                    Số lượng:
                    <input type="number" name="sl" value={product.sl} onChange={handleChange} required />
                </label>
                <label>
                    Giá:
                    <input type="number" name="gia" value={product.gia} onChange={handleChange} required />
                </label>
                <label>
                    Ngày bán:
                    <input type="date" name="ngayban" value={product.ngayban} onChange={handleChange} required />
                </label>
                <button type="submit">Lưu</button>
            </form>
        </div>
    );
};

export default EditProduct;



