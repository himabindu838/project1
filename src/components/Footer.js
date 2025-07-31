import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="andhra-spice-footer">
      <div className="footer-container">

        {/* Column 2: Logo & Social Media */}
        <div className="footer-column logo-column">
          <div className="footer-logo">
            <img 
              src="/images/download (1).png" 
              alt="Andhra Spice Vizag Logo" 
            />
          </div>
          <p className="footer-about">
            Serving authentic Andhra flavors since 2010. Experience the fiery taste of coastal Andhra cuisine.
          </p>
          <div className="social-media">
            <a href="#" className="social-icon facebook"><FaFacebookF /></a>
            <a href="#" className="social-icon instagram"><FaInstagram /></a>
            <a href="#" className="social-icon twitter"><FaTwitter /></a>
            <a href="#" className="social-icon youtube"><FaYoutube /></a>
          </div>
        </div>



        {/* Column 3: Menu Links */}
        <div className="footer-column">
          <h3>Our Menu</h3>
          <ul className="footer-menu">
            <li><a href="/andhra">Andhra Thali</a></li>
            <li><a href="/seafood">Seafood Specials</a></li>
            <li><a href="/chicken specials">Chicken Specialties</a></li>
            <li><a href="/biryani">Biryani Varieties</a></li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-menu">
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/menu">Our Menu</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        
        {/* Column 1: Contact Details */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>12-34-56, Near RTC Complex, MVP Colony,
              Visakhapatnam - 530017</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>+91 9618744164</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>info@andhraspice.com</span>
            </li>
            <li>
              <FaClock className="contact-icon" />
              <span>Open: 11:00 AM - 11:00 PM (Daily)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright-section">
        <p>&copy; {new Date().getFullYear()} Andhra Spice Vizag. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <span className="divider">|</span>
          <a href="#">Terms of Service</a>
          <span className="divider">|</span>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;