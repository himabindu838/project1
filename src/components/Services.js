import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Andhra Spices Vizag</h1>
        <img 
          src="https://paakashala.com/wp-content/uploads/2024/02/hedbtmicon.png" 
          alt="Culture of Care" 
          className="divider-icon"
        />
        <p>Authentic Andhra Flavors: Spice Up Your Events</p>
      </div>

      {/* Party Halls Section */}
      <div className="party-halls-section">
        <div className="container">
          {/* Location 1 */}
          <div className="location-card">
            <div className="image-carousel">
              <img 
                src="https://content.jdmagicbox.com/comp/chittoor/t3/9999p8572.8572.210604125529.l5t3/catalogue/andhra-spice-chittoor-k73zo6qdra.jpg" 
                alt="Andhra Spices Vizag Location 1" 
              />
            </div>
            <h4>Dwarakanagar, Vizag</h4>
            <p>12-34-56, Near RTC Complex, MVP Colony, Visakhapatnam - 530017</p>
            <div className="button-group">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=12-34-56,+Near+RTC+Complex,+MVP+Colony,+Visakhapatnam+530017" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="direction-button"
              >
                <svg aria-hidden="true" className="direction-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.61 233.32L278.68 9.39c-12.52-12.52-32.83-12.52-45.36 0L9.39 233.32c-12.52 12.53-12.52 32.83 0 45.36l223.93 223.93c12.52 12.53 32.83 12.53 45.36 0l223.93-223.93c12.52-12.53 12.52-32.83 0-45.36zm-100.98 12.56l-84.21 77.73c-5.12 4.73-13.43 1.1-13.43-5.88V264h-96v64c0 4.42-3.58 8-8 8h-32c-4.42 0-8-3.58-8-8v-80c0-17.67 14.33-32 32-32h112v-53.73c0-6.97 8.3-10.61 13.43-5.88l84.21 77.73c3.43 3.17 3.43 8.59 0 11.76z"></path>
                </svg>
                Directions
              </a>
              <a href="/360-view" className="view-button">
                360° View
              </a>
            </div>
          </div>

          {/* Location 2 */}
          <div className="location-card">
            <div className="image-carousel">
              <img 
                src="https://b.zmtcdn.com/data/pictures/3/52453/c5e0517d1736997f1f83b62526d0aa00.jpg?fit=around|750:500&crop=750:500;*,*" 
                alt="Andhra Spices Vizag Location 2" 
              />
            </div>
            <h4>Seethammadhara, Vizag</h4>
            <p>12-34-56, Near RTC Complex, MVP Colony, Visakhapatnam - 530017</p>
            <div className="button-group">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=12-34-56,+Near+RTC+Complex,+MVP+Colony,+Visakhapatnam+530017" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="direction-button"
              >
                <svg aria-hidden="true" className="direction-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.61 233.32L278.68 9.39c-12.52-12.52-32.83-12.52-45.36 0L9.39 233.32c-12.52 12.53-12.52 32.83 0 45.36l223.93 223.93c12.52 12.53 32.83 12.53 45.36 0l223.93-223.93c12.52-12.53 12.52-32.83 0-45.36zm-100.98 12.56l-84.21 77.73c-5.12 4.73-13.43 1.1-13.43-5.88V264h-96v64c0 4.42-3.58 8-8 8h-32c-4.42 0-8-3.58-8-8v-80c0-17.67 14.33-32 32-32h112v-53.73c0-6.97 8.3-10.61 13.43-5.88l84.21 77.73c3.43 3.17 3.43 8.59 0 11.76z"></path>
                </svg>
                Directions
              </a>
              <a href="/360-view" className="view-button">
                360° View
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Catering Services Section */}
      <div className="catering-section">
        <div className="section-header">
          <h2>Catering Services</h2>
          <img 
            src="https://paakashala.com/wp-content/uploads/2024/02/hedbtmicon.png" 
            alt="Culture of Care" 
            className="divider-icon"
          />
          <p>Delicious Andhra Cuisine for Your Special Occasions</p>
        </div>

        <div className="catering-images">
          <div className="catering-image-container">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSR0AerWvf_6aA5TWN6cg-cmWL02n_cuMQQA&s" 
              alt="Andhra Catering Service 1" 
            />
          </div>
          <div className="catering-image-container">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFa1DceeWVnmOmKLkLFZfrxmNKYzc-xYWaQ&s" 
              alt="Andhra Catering Service 2" 
            />
          </div>
        </div>

        <div className="contact-button-container">
          <a href="/contact" className="contact-button">
            Contact Us
            <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
