import React from 'react';
import './Biryani.css';

const Biryani = () => {
  return (
    <div className="biryani-page">
      {/* Hero Section */}
      <section className="biryani-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Biryani Varieties</h1>
          <p>Discover the royal flavors of India's most beloved dish</p>
          <div className="hero-buttons">
            <a href="/order" className="btn btn-primary">Explore Varieties</a>
            <a href="/menu" className="btn btn-secondary">Full Menu</a>
          </div>
        </div>
      </section>

      {/* Biryani Introduction */}
      <section className="biryani-intro">
        <div className="container">
          <div className="intro-content">
            <h2>The Art of Biryani Making</h2>
            <p>
              Our biryanis are crafted with precision, using traditional dum cooking techniques 
              that have been perfected over generations. Each variety represents a unique regional 
              interpretation of this iconic dish, featuring aromatic basmati rice, premium meats, 
              and a secret blend of spices.
            </p>
          </div>
          <div className="intro-image">
            <img 
              src="https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg" 
              alt="Biryani" 
              className="biryani-main-image"
            />
          </div>
        </div>
      </section>

      {/* Biryani Varieties Section */}
      <section className="biryani-varieties" id="biryani-varieties">
        <div className="container">
          <h2>Our Signature Biryani Collection</h2>
          
          <div className="biryani-grid">
            {/* Hyderabadi */}
            <div className="biryani-category">
              <h3>Hyderabadi Specialties</h3>
              <div className="biryani-items-list">
                <div className="biryani-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfd98lM5L05Lsx-CACMf5pl_2QA73wFp_MQ&s" alt="Hyderabadi Biryani" />
                  <h4>Hyderabadi Dum Biryani</h4>
                  <p>The Nizam's legacy with 16 spices</p>
                </div>
                <div className="biryani-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKylqIwntBYfGFQCs3put0YH7UKNeo4tqmYA&s" alt="Kacchi Biryani" />
                  <h4>Kacchi Biryani</h4>
                  <p>Marinated raw meat cooked with rice</p>
                </div>
              </div>
            </div>

            {/* Lucknowi */}
            <div className="biryani-category">
              <h3>Lucknowi Delicacies</h3>
              <div className="biryani-items-list">
                <div className="biryani-item">
                  <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2016/07/awadhi-chicken-biryani--500x500.jpg" alt="Lucknowi Biryani" />
                  <h4>Lucknowi Biryani</h4>
                  <p>Subtle flavors with tender meat</p>
                </div>
                <div className="biryani-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhkwR7v2hhemJRPFAUJJPEVKZBKwXZl8uKg&sg" alt="Awadhi Biryani" />
                  <h4>Awadhi Biryani</h4>
                  <p>Royal recipe from the Nawabs' kitchen</p>
                </div>
              </div>
            </div>

            {/* Regional Varieties */}
            <div className="biryani-category">
              <h3>Regional Varieties</h3>
              <div className="biryani-items-list">
                <div className="biryani-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xKicOL90ZMFd96d-74AVpVDplzQQigWz5Q&s" alt="Sindhi Biryani" />
                  <h4>Sindhi Biryani</h4>
                  <p>Potatoes and prunes in spicy goodness</p>
                </div>
                <div className="biryani-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvdZv9-9AK9epWA8duL-7yJYrvMJHvveDjQ&s" alt="Kolkata Biryani" />
                  <h4>Kolkata Biryani</h4>
                  <p>Fragrant with potatoes and boiled eggs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooking Process Section */}
      <section className="cooking-process">
        <div className="container">
          <div className="process-content">
            <h2>Our Traditional Dum Cooking</h2>
            <p>
              We follow the authentic dum pukht method where the biryani is slow-cooked in sealed 
              handis over charcoal fire. This ancient technique allows the meat to cook in its own 
              juices while the rice absorbs all the aromatic flavors.
            </p>
            <ul className="process-steps">
              <li>Marination for 12-24 hours</li>
              <li>Layering with premium basmati rice</li>
              <li>Sealed with dough for perfect steam</li>
              <li>Slow-cooked over charcoal for 2-3 hours</li>
            </ul>
          </div>
          <div className="process-image">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uftExEOaC7ms_PcC2cKEa3YndRzlIFdo1Q&s" 
              alt="Dum Cooking Process" 
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="biryani-pricing">
        <div className="container">
          <h2 style={{textAlign:"center"}}>Biryani Options</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Vegetable Biryani</h3>
              <div className="price">₹249</div>
              <ul className="price-features">
                <li>Assorted fresh vegetables</li>
                <li>Fragrant basmati rice</li>
                <li>Served with raita & salan</li>
                <li>Choice of mirchi ka salan or dahi chutney</li>
              </ul>
              <a href="/order" className="btn btn-primary">Order Now</a>
            </div>
            
            <div className="pricing-card featured">
              <div className="featured-badge">Best Seller</div>
              <h3>Chicken Biryani</h3>
              <div className="price">₹349</div>
              <ul className="price-features">
                <li>Succulent chicken pieces</li>
                <li>Traditional dum cooking</li>
                <li>Served with raita & salan</li>
                <li>Extra birista (fried onions)</li>
              </ul>
              <a href="/order" className="btn btn-primary">Order Now</a>
            </div>
            
            <div className="pricing-card">
              <h3>Mutton Biryani</h3>
              <div className="price">₹449</div>
              <ul className="price-features">
                <li>Tender mutton pieces</li>
                <li>24-hour marination</li>
                <li>Served with raita & salan</li>
                <li>Includes special shahi tukda</li>
              </ul>
              <a href="/order" className="btn btn-primary">Order Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Accompaniments Section */}
    
      {/* Testimonials */}
      <section className="biryani-testimonials">
        <div className="container">
          <h2 style={{textAlign:"center"}}>Biryani Lovers Say</h2>
          
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                "The Hyderabadi biryani here is the closest I've found to what I ate in the old city of Hyderabad. The flavors are explosive!"
              </div>
              <div className="testimonial-author">
                <div className="author-name">Aditya R.</div>
                <div className="author-location">Hyderabad</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                "As a biryani connoisseur, I can confidently say their Lucknowi biryani is exceptional. The meat melts in your mouth."
              </div>
              <div className="testimonial-author">
                <div className="author-name">Farhan K.</div>
                <div className="author-location">Lucknow</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                "The Kolkata biryani took me back to my childhood. The subtle flavors and the perfect aloo make it magical."
              </div>
              <div className="testimonial-author">
                <div className="author-name">Priyanka M.</div>
                <div className="author-location">Kolkata</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="biryani-cta">
        <div className="container">
          <h2>Ready for a Royal Biryani Experience?</h2>
          <div className="cta-buttons">
            <a href="tel:+91 9618744164" className="btn btn-primary">Call to Order</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biryani;