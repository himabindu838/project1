import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './TableBook.css';

const TableBook = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in all required fields.',
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Booking failed');
      }

      const data = await response.json();

      Swal.fire({
        icon: 'success',
        title: 'Table Booked!',
        html: `<p>Your table has been successfully booked.</p>
               <p><strong>Booking ID:</strong> ${data.bookingId}</p>`,
        confirmButtonColor: '#3085d6',
      });

      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        specialRequests: ''
      });

    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Booking Failed',
        text: err.message || 'Failed to book table. Please try again.',
        confirmButtonColor: '#d33',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="table-booking-container">
      <div className="booking-header">
        <h2>Table Reservation at Andhra Spice</h2>
        <p>Book your table for an authentic Andhra dining experience</p>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
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

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date*</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time*</label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select Time</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="9:00 PM">9:00 PM</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests*</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
            ))}
            <option value="12">12 people (Large Group)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows="3"
            placeholder="Any special arrangements or dietary requirements..."
          />
        </div>

        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? 'Booking...' : 'Book Table'}
        </button>
      </form>

      <div className="booking-info">
        <h3>Restaurant Information</h3>
        <p><strong>Opening Hours:</strong> 11:00 AM - 10:30 PM (Daily)</p>
        <p><strong>Contact:</strong> +91 9618744164</p>
        <p><strong>Address:</strong> 12-34-56, Near RTC Complex, MVP Colony,
        Visakhapatnam - 530017</p>
        <p className="note">* For reservations of more than 12 people, please call us directly.</p>
      </div>
    </div>
  );
};

export default TableBook;
