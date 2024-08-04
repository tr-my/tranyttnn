import React, { useState, useEffect } from 'react';
import './Product.css';
import { Link, useNavigate } from 'react-router-dom';
import editIcon from '../Assets/sua.png';
import Xoaicon from '../Assets/xoa.png'


function Products() {
    const [product, setProducts] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [accountToDelete, setAccountToDelete] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const initialAccounts = JSON.parse(localStorage.getItem('product')) || [];
        setProducts(initialAccounts);
    }, []);

    const handleDeleteClick = (prod) => {
        setAccountToDelete(prod);
        setShowDeleteModal(true);
    };

    const handleDeleteConfirm = () => {
        const updatedProducts = product.filter(prod => prod.id !== accountToDelete.id);
        setProducts(updatedProducts);
        localStorage.setItem('product', JSON.stringify(updatedProducts));
        setShowDeleteModal(false);
        setAccountToDelete(null);
    };
    return (
        <div className="Product-page">
            <h1>Danh sách sản phẩm</h1>
            <table className="Product-table">
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên</th>
                        <th>Loại sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Ngày bán</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((prod, index) => (
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.ten}</td>
                            <td>{prod.lsp}</td>
                            <td>{prod.sl}</td>
                            <td>{prod.gia}</td>
                            <td>{prod.ngayban}</td>
                            <td>
                                <Link to={`/products/edit/${prod.id}`} className="lev">
                                    <img src={editIcon} alt="Edit" />
                                </Link>
                                <button className="lev" onClick={() => handleDeleteClick(prod)}>
                                    <img src={Xoaicon} alt="lev" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/products/add" className="add-account-button">+ Thêm sản phẩm</Link>
            {showDeleteModal && (
                <div className="delete-modal">
                    <div className="delete-modal-content">
                        <h1>Xóa</h1>
                        <p>Bạn có muốn xóa {accountToDelete.name} không?</p>
                        <div className="modal-buttons">
                            <button className="delete-button" onClick={handleDeleteConfirm}>Xóa</button>
                            <button className="cancel-button" onClick={() => setShowDeleteModal(false)}>Không</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;
