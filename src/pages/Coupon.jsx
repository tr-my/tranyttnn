
import editIcon from '../Assets/sua.png';
import Xoaicon from '../Assets/xoa.png'
import './Coupon.css'
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DiscountList = [
    { id: 1, name: 'DISCOUNT1', value: '10%' },
    { id: 2, name: 'DISCOUNT2', value: '20%' }
];

function Coupon() {
    const [coupons, setCoupons] = useState(() => {
        const storedCategori = JSON.parse(localStorage.getItem('ccoupons')) || DiscountList;
        return storedCategori;
    });
    const [isChecked, setIsChecked] = useState(true);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const [showDeleteMod, setShowDeleteMod] = useState(false);
    const [cateToDele, setCateToDele] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('ccoupons', JSON.stringify(coupons));
    }, [coupons]);
    const handleDelete = () => {
        setCoupons(prev => prev.filter(discount => discount.id !== cateToDele.id));
        setShowDeleteMod(false);
    };

    const openDeleteMod = (cate) => {
        setCateToDele(cate);
        setShowDeleteMod(true);
    };

    return (
        <div className="categogy-page">
            <h1>Mã giảm giá</h1>
            <table className="categogy-table">
                <thead>
                    <tr>
                        <th>Tên mã giảm giá</th>
                        <th>Mã giảm giá</th>
                        <th>Giá trị ưu đãi</th>
                        <th>Sản phẩm</th>
                        <th>Thời hạn</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {coupons.map(discount => (
                        <tr key={discount.id}>
                            <td>{discount.name}</td>
                            <td>{discount.id}</td>
                            <td>{discount.value}</td>
                            <td>{discount.sp}</td>
                            <td>
                                <label className="toggle-switch">
                                    <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                                    <span className="slider"></span>
                                </label>
                            </td>
                            <td>
                                <Link to={`/coupon/edit/${discount.id}`} className="lev"><img src={editIcon} alt="Edit" /></Link>
                                <button className="lev" onClick={() => openDeleteMod(discount)}>
                                    <img src={Xoaicon} alt="lev" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/coupon/add" className="add-account-button">+ Thêm mã giảm giá</Link>
            {showDeleteMod && (
                <div className="delete-modal">
                    <div className="delete-modal-content">
                        <h1>Xóa</h1>
                        <p>Bạn có muốn xóa không?</p>
                        <div className="modal-buttons">
                            <button className="delete-button" onClick={handleDelete}>Xóa</button>
                            <button className="cancel-button" onClick={() => setShowDeleteMod(false)}>Huỷ</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Coupon;
