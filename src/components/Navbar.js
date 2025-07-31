import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <header className="sattvam-header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCkfYFvr8x2tnVKNfNQmXGpINsgwgUwUfng&s"  
              className="logo-img"
              alt="Logo"
            />
          </Link>
        </div>

        <nav className={`header-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {mobileMenuOpen && (
            <button 
              className="close-menu-button" 
              onClick={() => setMobileMenuOpen(false)}
            >
              &times;
            </button>
          )}
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            </li>
            <li 
              className="nav-item has-submenu" 
              onMouseEnter={() => setSubMenuOpen(true)}
              onMouseLeave={() => setSubMenuOpen(false)}
            >
              <div className="nav-link-container">
                <Link 
                  to="/menu" 
                  className="nav-link"
                  onClick={(e) => {
                    // Prevent default only if submenu is open on mobile
                    if (window.innerWidth <= 768 && subMenuOpen) {
                      e.preventDefault();
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  Our Menu <span className="submenu-arrow">&#9660;</span>
                </Link>
              </div>
              <ul className={`submenu ${subMenuOpen ? 'submenu-open' : ''}`}>
                <li className="submenu-item">
                  <Link 
                    to="/andhra" 
                    className="submenu-link" 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setSubMenuOpen(false);
                    }}
                  >
                    Andhra Thali
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link 
                    to="/seafood" 
                    className="submenu-link" 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setSubMenuOpen(false);
                    }}
                  >
                    Seafood Specials
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link 
                    to="/chickenspecials" 
                    className="submenu-link" 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setSubMenuOpen(false);
                    }}
                  >
                   Chicken Specialties
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link 
                    to="/biryani" 
                    className="submenu-link" 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setSubMenuOpen(false);
                    }}
                  >
                  Biryani Varieties
                  </Link>
                </li>
                {/* Add more submenu items as needed */}
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
          <Link to="/order" className="order-now-link">
      <button className="order-now-button">
        Order Now
      </button>
    </Link>
    &nbsp;
    &nbsp;
    <Link to="/book" className="order-now-link">
      <button className="order-now-button">
        Book a Table
      </button>
    </Link>
        </nav>

        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;