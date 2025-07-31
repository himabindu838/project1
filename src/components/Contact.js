import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="paakashala-contact">
      {/* Header Section */}
      <div className="contact-header">
        <h1>Contact Andhra Spices</h1>
        <div className="header-divider">
          <img src="https://paakashala.com/wp-content/uploads/2024/02/hedbtmicon.png" alt="divider" />
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-main">
        {/* Left Column - Contact Info */}
        <div className="contact-info-column">
          <div className="contact-info-box">
            <h3>Corporate Office</h3>
            <div className="address-box">
              <h4>Visakhapatnam (Vizag)</h4>
              <p className="address">
                12-34-56, Near RTC Complex, MVP Colony,<br />
                Visakhapatnam - 530017
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">✉</span>
                  <a href="mailto:info@andhraspices.com">info@andhraspices.com</a>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+919618744164">+91 9618744164</a>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📞</span>
                  <span>0891 1234567</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-info-box">
            <h3>Outdoor Catering</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">✉</span>
                <a href="mailto:catering@andhraspices.com">catering@andhraspices.com</a>
              </div>
              <div className="contact-method">
                <span className="contact-icon">📞</span>
                <a href="tel:+919618744165">+91 9618744165</a>
              </div>
            </div>
          </div>

          <div className="contact-info-box">
            <h3>Party Hall</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">✉</span>
                <a href="mailto:events@andhraspices.com">events@andhraspices.com</a>
              </div>
              <div className="contact-method">
                <span className="contact-icon">📞</span>
                <a href="tel:+919618744166">+91 9618744166</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="contact-form-column">
          <div className="form-header">
            <h3>We would love to hear from you!</h3>
          </div>
          {/* TODO: Replace {your_form_id} with your actual Formspree form ID */}
          <form className="contact-form" action="https://formspree.io/f/mldlnbqj" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.3456789012345!2d83.30000000000001!3d17.735000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ0JzA2LjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2si"
            width="100vh"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            title="Andhra Spices Vizag Location"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;