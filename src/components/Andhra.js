import React from 'react';
import './Andhra.css';

const Andhra = () => {
  return (
    <div className="thali-page">
      {/* Hero Section */}
      <section className="thali-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Andhra Thali</h1>
          <p>Experience the complete spectrum of Andhra flavors in one plate</p>
          <div className="hero-buttons">
            <a href="/order" className="btn btn-primary">Explore Items</a>
            <a href="/menu" className="btn btn-secondary">Full Menu</a>
          </div>
        </div>
      </section>

      {/* Thali Introduction */}
      <section className="thali-intro">
        <div className="container">
          <div className="intro-content">
            <h2>The Authentic Andhra Dining Experience</h2>
        
            <p>
              Our Andhra Thali is a culinary journey through the diverse regions of Andhra Pradesh. 
              Each element is carefully prepared using traditional recipes passed down through generations, 
              featuring the perfect balance of spicy, tangy, and savory flavors that Andhra cuisine is famous for.
            </p>
          </div>
          <div className="intro-image">
            <img 
              src="https://images.deliveryhero.io/image/talabat/Menuitems/Ugadimenus638512865099853258.jpg" 
              alt="Andhra Thali" 
              className="thali-main-image"
            />
          </div>
        </div>
      </section>

      {/* Thali Items Section */}
      <section className="thali-items" id="thali-items">
        <div className="container">
          <h2>What's Included in Our Thali</h2>
        
          
          <div className="thali-grid">
            {/* Rice Items */}
            <div className="thali-category">
              <h3>Rice Varieties</h3>
              <div className="thali-items-list">
                <div className="thali-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhC86roSApuu6sGBzcmh_6px5CCWlV2hWgg&s" alt="Annam" />
                  <h4>Steamed Rice (Annam)</h4>
                  <p>The foundation of any Andhra meal</p>
                </div>
                <div className="thali-item">
                  <img src="https://aahaaramonline.com/wp-content/uploads/2019/04/Andhra_Nuvvula_Chintapandu_Pulihora_1.jpg" alt="Pulihora" />
                  <h4>Pulihora (Tamarind Rice)</h4>
                  <p>Tangy and spicy festival rice</p>
                </div>
              </div>
            </div>

            {/* Curries */}
            <div className="thali-category">
              <h3>Curries & Gravies</h3>
              <div className="thali-items-list">
                <div className="thali-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqamP8Ww0gyxzlQ1EjnLwDWlBS_OjV6LSMg&s" alt="Gongura Pachadi" />
                  <h4>Gongura Pachadi</h4>
                  <p>Signature Andhra sorrel leaves chutney</p>
                </div>
                <div className="thali-item">
                  <img src="https://www.pavaniskitchen.com/wp-content/uploads/2021/09/bendakaya-pulusu-1.jpg" alt="Bendakaya Pulusu" />
                  <h4>Bendakaya Pulusu</h4>
                  <p>Okra in tangy tamarind gravy</p>
                </div>
              </div>
            </div>

            {/* Sweets */}
            <div className="thali-category">
              <h3>Sweets & Desserts</h3>
              <div className="thali-items-list">
                <div className="thali-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFaIaXWg60FjTh4IhS8-iOYnl-2leFXA48g&s" alt="Pootharekulu" />
                  <h4>Pootharekulu</h4>
                  <p>Paper-thin sweet from Atreyapuram</p>
                </div>
                <div className="thali-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJ-PGjfdGL-wvIz__Q0tyJh9ipJ-tqRVEsw&s" alt="Boorelu" />
                  <h4>Boorelu</h4>
                  <p>Sweet lentil dumplings in jaggery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thali Experience Section */}
      <section className="thali-experience">
        <div className="container">
          <div className="experience-content">
            <h2>More Than Just a Meal</h2>
           
            <p>
              Our Andhra Thali is served on traditional banana leaves, following the authentic 
              Andhra dining style. The arrangement of dishes follows the traditional sequence 
              to enhance your culinary experience.
            </p>
            <ul className="experience-features">
              <li>Unlimited servings of rice and curries</li>
              <li>Seasonal specials based on availability</li>
              <li>Traditional serving style with attention to detail</li>
              <li>Option to customize spice levels</li>
            </ul>
          </div>
          <div className="experience-image">
            <img 
              src="https://cfimg.wowcher.co.uk/cdn-cgi/image/height=487,width=727,quality=85,format=auto/https://static.wowcher.co.uk/images/deal/32515564/1343152.jpg" 
              alt="Thali Experience" 
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="thali-pricing">
        <div className="container">
          <h2 style={{textAlign:"center"}}>Thali Options</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Vegetarian Thali</h3>
              <div className="price">₹299</div>
              <ul className="price-features">
                <li>12+ authentic vegetarian dishes</li>
                <li>Unlimited rice & accompaniments</li>
                <li>2 sweets & buttermilk</li>
                <li>Traditional serving style</li>
              </ul>
              <a href="/reservations" className="btn btn-primary">Book Now</a>
            </div>
            
            <div className="pricing-card featured">
              <div className="featured-badge">Most Popular</div>
              <h3>Non-Vegetarian Thali</h3>
              <div className="price">₹399</div>
        
              <ul className="price-features">
                <li>10+ dishes including 3 non-veg items</li>
                <li>Signature chicken & fish curries</li>
                <li>Unlimited rice & accompaniments</li>
                <li>2 sweets & buttermilk</li>
              </ul>
              <a href="/reservations" className="btn btn-primary">Book Now</a>
            </div>
            
            <div className="pricing-card">
              <h3>Premium Thali</h3>
              <div className="price">₹499</div>
              <ul className="price-features">
                <li>15+ dishes including seafood</li>
                <li>Royyala Iguru (Prawns Curry)</li>
                <li>Chef's special desserts</li>
                <li>Includes filter coffee</li>
              </ul>
              <a href="/reservations" className="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="thali-testimonials">
        <div className="container">
          <h2 style={{textAlign:"center"}}>What Our Guests Say</h2>
          
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                "The Andhra Thali took me back to my childhood in Vijayawada. Every item was perfectly spiced and authentic."
              </div>
              <div className="testimonial-author">
                <div className="author-name">Ramesh K.</div>
                <div className="author-location">Visakhapatnam</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                "The variety in the thali was incredible! I especially loved the Gongura Pachadi - just like my grandmother makes it."
              </div>
              <div className="testimonial-author">
                <div className="author-name">Priya R.</div>
                <div className="author-location">Hyderabad</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                "As someone new to Andhra cuisine, this thali was the perfect introduction. The staff explained each dish beautifully."
              </div>
              <div className="testimonial-author">
                <div className="author-name">Arjun M.</div>
                <div className="author-location">Bangalore</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="thali-cta">
        <div className="container">
          <h2>Ready for an Authentic Andhra Experience?</h2>
          <div className="cta-buttons">
           
            <a href="tel:+91 9618744164" className="btn btn-primary">Call to Book</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Andhra;
