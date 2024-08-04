import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Ed.css';

function EditCoupon() {
    const location = useLocation();
    const navigate = useNavigate();

    const initialCopo = location.state?.cate || { id: '', name: '', value: '', expiration: '' };
    const [copo, setCopo] = useState(initialCopo);

    useEffect(() => {
        if (!location.state?.cate) {
            navigate('/coupon'); // Redirect nếu không có dữ liệu
        }
    }, [location.state, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCopo((prevCopo) => ({
            ...prevCopo,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedCoupons = JSON.parse(localStorage.getItem('coupons')) || [];
        const updatedCoupons = storedCoupons.map((coupon) =>
            coupon.id === copo.id ? copo : coupon
        );
        localStorage.setItem('coupons', JSON.stringify(updatedCoupons));
        navigate('/coupon'); // Redirect to the coupon list page
    };

    return (
        <form onSubmit={handleSubmit} className="edit-coupon-form">
            <div className="form-group">
                <label htmlFor="name">Tên mã giảm giá</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={copo.name}
                    onChange={handleChange}
                    placeholder="Tên mã giảm giá"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="value">Giá trị ưu đãi</label>
                <input
                    type="text"
                    id="value"
                    name="value"
                    value={copo.value}
                    onChange={handleChange}
                    placeholder="Ví dụ: 30%"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="expiration">Thời gian hết hạn</label>
                <input
                    type="time"
                    id="expiration"
                    name="expiration"
                    value={copo.expiration}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Lưu</button>
            <button type="button" onClick={() => navigate('/coupon')}>Quay lại</button>
        </form>
    );
}

export default EditCoupon;
