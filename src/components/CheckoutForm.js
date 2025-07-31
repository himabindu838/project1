import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems = [], totalAmount = 0 } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    landmark: '',
    city: '',
    pincode: '',
    paymentMethod: 'cash_on_delivery',
    specialInstructions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const requiredFields = ['name', 'phone', 'address', 'city', 'pincode'];
    const missingFields = requiredFields.filter(field => !formData[field].trim());

    if (missingFields.length > 0) {
      setError(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return false;
    }

    if (cartItems.length === 0) {
      setError('Your cart is empty. Please add items before checkout.');
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setError(null);

    try {
      const orderData = {
        customerDetails: formData,
        orderItems: cartItems,
        totalAmount
      };

      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      // Check for non-JSON responses
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const errorText = await response.text();
        throw new Error(`Server returned unexpected response: ${errorText.substring(0, 100)}...`);
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to place order');
      }

      // Successful order
      navigate('/success', { 
        state: { 
          orderId: result.data.orderId,
          customerName: result.data.customerName,
          totalAmount: result.data.totalAmount, // This is now directly in state
          orderDate: result.data.orderDate,
          deliveryAddress: formData.address // Add this if you want to show address
        }
      });
      
    } catch (error) {
      console.error('Order submission error:', error);
      setError(error.message || 'Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      <div className="checkout-grid">
        <div className="delivery-details">
          <h3>Delivery Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Delivery Address*</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
              />
            </div>

            <div className="form-group">
              <label htmlFor="landmark">Landmark</label>
              <input
                type="text"
                id="landmark"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City*</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="pincode">Pincode*</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="specialInstructions">Special Instructions</label>
              <textarea
                id="specialInstructions"
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleChange}
                rows="2"
                placeholder="Any specific delivery instructions..."
              />
            </div>

            <div className="payment-method">
              <h3>Payment Method</h3>
              <div className="payment-option">
                <input
                  type="radio"
                  id="cash_on_delivery"
                  name="paymentMethod"
                  value="cash_on_delivery"
                  checked={formData.paymentMethod === 'cash_on_delivery'}
                  onChange={handleChange}
                />
                <label htmlFor="cash_on_delivery">Cash on Delivery</label>
              </div>
              <p className="payment-note">
                Pay with cash when your order is delivered
              </p>
            </div>

            <button 
              type="submit" 
              className="place-order-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Placing Order...
                </>
              ) : (
                'Place Order (Cash on Delivery)'
              )}
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h3>Your Order</h3>
          <div className="order-items">
            {cartItems.map((item, index) => (
              <div key={index} className="order-item">
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-quantity">× {item.quantity}</span>
                </div>
                <span className="item-price">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="total-row">
              <span>Delivery Fee</span>
              <span>₹0</span>
            </div>
            <div className="total-row grand-total">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;