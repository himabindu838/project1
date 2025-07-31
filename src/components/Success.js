import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const location = useLocation();
  const { 
    orderId, 
    totalAmount, 
    customerName, 
    orderDate,
    deliveryAddress 
  } = location.state || {};

  return (
    <div className="order-success-container">
      <div className="success-icon">✓</div>
      <h2>Order Placed Successfully!</h2>
      
      {orderId && (
        <div className="order-details">
          <p><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Customer Name:</strong> {customerName}</p>
          <p><strong>Total Amount:</strong> ₹{totalAmount}</p>
          <p><strong>Order Date:</strong> {new Date(orderDate).toLocaleString()}</p>
          <p><strong>Payment Method:</strong> Cash on Delivery</p>
          <p><strong>Delivery Address:</strong> {deliveryAddress}</p>
          <p className="delivery-instruction">
            Please have the exact amount ready when our delivery arrives.
          </p>
        </div>
      )}

      <p className="confirmation-text">
        We've received your order and will contact you shortly to confirm.
      </p>

      <Link to="/" className="back-to-home">
        Back to Home
      </Link>
    </div>
  );
};

export default Success;