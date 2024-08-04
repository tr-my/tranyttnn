import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import './OrderTable.css';

const ordersData = [
    { id: '2016727782', paymentMethod: 'Chuyển khoản ngân hàng', customerName: 'Khánh An', status: 'Hoàn tất thanh toán' },
    { id: '2346718945', paymentMethod: 'Chuyển khoản ngân hàng', customerName: 'Hạ Linh', status: 'Đang xử lý' },
    { id: '32348394561', paymentMethod: 'Chuyển khoản ngân hàng', customerName: 'Văn Doãn', status: 'Đang xử lý' }
];

const OrderTable = () => {
    const [startDate, setStartDate] = useState(new Date('2023-10-20'));
    const [endDate, setEndDate] = useState(new Date('2023-10-22'));

    return (
        <div className="order-table">
            <div className="header">
                <h1>Bảng đơn hàng</h1>
                <div className="date-picker">
                    <label>Ngày đặt hàng:</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    <label>Ngày sửa đổi:</label>
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Phương thức thanh toán</th>
                        <th>Tên khách hàng</th>
                        <th>Trạng thái</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {ordersData.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.paymentMethod}</td>
                            <td>{order.customerName}</td>
                            <td className={order.status === 'Hoàn tất thanh toán' ? 'completed' : 'processing'}>
                                {order.status}
                            </td>
                            <td>

                                <Link to={`/oder/view/${order.id}`} className="lev">
                                    <FaEye />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;