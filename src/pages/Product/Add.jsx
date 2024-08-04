
import './Add.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add() {
    const [product, setProduct] = useState({
        id: '',
        ten: '',
        lsp: '',
        sl: '',
        gia: '',
        ngayban: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedProducts = JSON.parse(localStorage.getItem('product')) || [];
        const updatedProducts = [...storedProducts, product];
        localStorage.setItem('product', JSON.stringify(updatedProducts));
        navigate('/products');
    };

    return (
        <div className="add-product-form">
            <h1>Thêm sản phẩm mới</h1>
            <form onSubmit={handleSubmit} className='adco-group'>
                <label>
                    Mã sản phẩm:
                    <input
                        type="text"
                        name="id"
                        value={product.lsp}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Tên sản phẩm:
                    <input
                        type="text"
                        name="ten"
                        value={product.lsp}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Loại sản phẩm:
                    <input
                        type="text"
                        name="lsp"
                        value={product.lsp}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Số lượng:
                    <input
                        type="number"
                        name="sl"
                        value={product.sl}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Giá:
                    <input
                        type="number"
                        name="gia"
                        value={product.gia}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Ngày bán:
                    <input
                        type="number"
                        name="ngayban"
                        value={product.gia}
                        onChange={handleChange}
                        required
                    />
                </label>
            </form>
            <div className="adco-actions">
                <button type="submit" className="thay">Lưu</button>
                <button type="button" className="thay" onClick={() => navigate('/account')}>Hủy</button>
            </div>
        </div>

    );
}

export default Add;
