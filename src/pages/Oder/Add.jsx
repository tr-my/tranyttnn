
import React from 'react';
import { useParams } from 'react-router-dom';
import './add.css'

const orderDetails = {
    '2016727782': { product: 'Product A', price: '1000', buyerName: 'Khánh An', createdBy: 'Employee 1', shippingStatus: 'Delivered' },
    '2346718945': { product: 'Product B', price: '2000', buyerName: 'Hạ Linh', createdBy: 'Employee 2', shippingStatus: 'In Progress' },
    '32348394561': { product: 'Product C', price: '3000', buyerName: 'Văn Doãn', createdBy: 'Employee 3', shippingStatus: 'In Progress' }
};

const OrderDetail = () => {
    const { id } = useParams();
    const detail = orderDetails[id];

    return (
        <div className="order-xem">
            <h1>Chi tiết đơn hàng {id}</h1>
            <table className="order-detail-table">
                <tbody>
                    <tr>
                        <td>Sản phẩm</td>
                        <td>{detail.product}</td>
                    </tr>
                    <tr>
                        <td>Giá tiền</td>
                        <td>{detail.price}</td>
                    </tr>
                    <tr>
                        <td>Tên người mua</td>
                        <td>{detail.buyerName}</td>
                    </tr>
                    <tr>
                        <td>Nhân viên tạo</td>
                        <td>{detail.createdBy}</td>
                    </tr>
                    <tr>
                        <td>Trạng thái giao hàng</td>
                        <td>{detail.shippingStatus}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderDetail;
