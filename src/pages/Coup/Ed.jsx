import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Ed.css'


function Ed() {
    const [copo, setCoup] = useState({
        id: '',
        name: '',
        value: '',
        sp: '',
        th: '',
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const coupons = JSON.parse(localStorage.getItem('coupons')) || [];
        const existingAccount = coupons.find(copo => copo.id === parseInt(id));
        if (existingAccount) {
            setCoup(existingAccount);
        }
    }, [id]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCoup(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const coupons = JSON.parse(localStorage.getItem('coupons')) || [];
        const updatedAccounts = coupons.map(acc => acc.id === parseInt(id) ? copo : acc);
        localStorage.setItem('coupons', JSON.stringify(updatedAccounts));
        navigate('/coupon');
    };

    return (
        <div className="edit-coupon">
            <h1>Chỉnh sửa mã giảm giá</h1>
            <form onSubmit={handleSubmit} className='adco-group'>
                <label>
                    Tên mã giảm giá
                    <input
                        type="text"
                        name="name"
                        value={copo.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Mã giảm giá
                    <input
                        type="number"
                        name="id"
                        value={copo.id}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Giá trị ưu đãi
                    <input
                        type="value"
                        name="value"
                        value={copo.value}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Sản phẩm
                    <input
                        type="text"
                        name="sp"
                        value={copo.sp}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Thời hạn
                    <input
                        type="time"
                        name="th"
                        value={copo.th}
                        onChange={handleChange}
                        required
                    />
                </label>
                <div className="adco-actions">
                    <button type="submit" className="thay">Lưu</button>
                    <button type="button" className="thay" onClick={() => navigate('/coupon')}>Quay lại</button>
                </div>
            </form>

        </div>
    );
};

export default Ed;