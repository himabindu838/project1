import React from 'react';
import './ChickenSpecialties.css';

const ChickenSpecialties = () => {
  return (
    <div className="chicken-page">
      {/* Hero Section */}
      <section className="chicken-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Chicken Specialties</h1>
          <p>Discover our signature chicken dishes crafted with authentic spices and traditional techniques</p>
          <div className="hero-buttons">
            <a href="/order" className="btn btn-primary">Explore Dishes</a>
            <a href="/menu" className="btn btn-secondary">Full Menu</a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="chicken-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Premium Chicken Dishes</h2>
            <p>
              Our chicken specialties showcase the rich culinary traditions of Andhra Pradesh, 
              featuring bold flavors, aromatic spices, and perfect cooking techniques. 
              Each dish is prepared with care using fresh, high-quality chicken and traditional recipes.
            </p>
          </div>
          <div className="intro-image">
            <img 
              src="https://static.india.com/wp-content/uploads/2024/03/chicken-curry.jpg##image/jpg" 
              alt="Andhra Chicken Curry" 
              className="chicken-main-image"
            />
          </div>
        </div>
      </section>

      {/* Chicken Items Section */}
      <section className="chicken-items" id="chicken-items">
        <div className="container">
          <h2>Our Signature Chicken Dishes</h2>
          
          <div className="chicken-grid">
            {/* Curries */}
            <div className="chicken-category">
              <h3>Curries & Gravies</h3>
              <div className="chicken-items-list">
                <div className="chicken-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvWDE0TYK__AEyWn2L6VOmL1W0VuVd50-AA&s" alt="Andhra Chicken Curry" />
                  <h4>Andhra Chicken Curry</h4>
                  <p>Spicy and tangy signature dish with rich gravy</p>
                  <div className="price">₹350</div>
                </div>
                <div className="chicken-item">
                  <img src="https://i.ytimg.com/vi/dLKOowGhPas/sddefault.jpg" alt="Natu Kodi Pulusu" />
                  <h4>Natu Kodi Pulusu</h4>
                  <p>Country chicken in tamarind-based gravy</p>
                  <div className="price">₹400</div>
                </div>
              </div>
            </div>

            {/* Dry Items */}
            <div className="chicken-category">
              <h3>Dry & Fried Specialties</h3>
              <div className="chicken-items-list">
                <div className="chicken-item">
                  <img src="https://www.spiceindiaonline.com/wp-content/uploads/2006/09/PSX_20221106_195242.jpg" alt="Andhra Chicken Fry" />
                  <h4>Andhra Chicken Fry</h4>
                  <p>Crispy fried chicken with aromatic spices</p>
                  <div className="price">₹320</div>
                </div>
                <div className="chicken-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpuhY7R5WA73jiQ4y0O9YNg7qvs7yBdaVrw&s" alt="Chicken Lollipop" />
                  <h4>Chicken Lollipop</h4>
                  <p>Frenched chicken wings with spicy marinade</p>
                  <div className="price">₹380</div>
                </div>
              </div>
            </div>

            {/* Biryanis */}
            <div className="chicken-category">
              <h3>Biryani & Rice Dishes</h3>
              <div className="chicken-items-list">
                <div className="chicken-item">
                  <img src="https://static.thehosteller.com/hostel/images/image.jpg/image-1744199226259.jpg" alt="Andhra Chicken Biryani" />
                  <h4>Andhra Chicken Biryani</h4>
                  <p>Fragrant rice layered with spicy chicken</p>
                  <div className="price">₹280</div>
                </div>
                <div className="chicken-item">
                  <img src="https://stewwithsaba.com/wp-content/uploads/2022/12/IMG_0176.jpg" alt="Chicken Pulao" />
                  <h4>Chicken Pulao</h4>
                  <p>Mildly spiced rice with tender chicken</p>
                  <div className="price">₹250</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooking Experience Section */}
      <section className="chicken-experience">
        <div className="container">
          <div className="experience-content">
            <h2>Authentic Cooking Techniques</h2>
            <p>
              Our chicken dishes are prepared using traditional Andhra methods, including slow cooking 
              in clay pots (handi), open-flame grilling, and perfect spice blending. Each dish is 
              marinated for optimal flavor and cooked to juicy perfection.
            </p>
            <ul className="experience-features">
              <li>Free-range chicken sourced from local farms</li>
              <li>Freshly ground spice blends for each dish</li>
              <li>Option to customize spice levels</li>
              <li>Traditional cooking methods for authentic taste</li>
            </ul>
          </div>
          <div className="experience-image">
            <img 
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style-500x375.jpg" 
              alt="Spices and Cooking" 
            />
          </div>
        </div>
      </section>

      {/* Combo Meals Section */}
      <section className="chicken-combos">
        <div className="container">
          <h2 style={{textAlign:"center"}}>Chicken Meal Combos</h2>
          <div className="combo-cards">
            <div className="combo-card">
              <h3>Classic Chicken Meal</h3>
              <div className="price">₹399</div>
              <ul className="combo-features">
                <li>1 Chicken Curry (Andhra or Chettinad style)</li>
                <li>Steamed Rice or 4 Rotis</li>
                <li>Dal or Rasam</li>
                <li>Papad & Pickle</li>
              </ul>
              <a href="/order" className="btn btn-primary">Order Now</a>
            </div>
            
            <div className="combo-card featured">
              <div className="featured-badge">Best Value</div>
              <h3>Chicken Feast Combo</h3>
              <div className="price">₹599</div>
              <ul className="combo-features">
                <li>1 Chicken Curry</li>
                <li>1 Chicken Dry Item (Fry or Pepper Fry)</li>
                <li>Biryani or Pulao</li>
                <li>2 Rotis, Salad & Dessert</li>
              </ul>
              <a href="/order" className="btn btn-primary">Order Now</a>
            </div>
            
            <div className="combo-card">
              <h3>Family Chicken Pack</h3>
              <div className="price">₹899</div>
              <ul className="combo-features">
                <li>2 Chicken Curries (different styles)</li>
                <li>1 Chicken Dry Item</li>
                <li>Biryani & 6 Rotis</li>
                <li>Dal, Salad, 2 Desserts</li>
              </ul>
              <a href="/order" className="btn btn-primary">Order Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="chicken-testimonials">
        <div className="container">
          <h2 style={{textAlign:"center"}}>What Our Customers Say</h2>
          
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                "The Andhra Chicken Curry is absolutely phenomenal! Perfect balance of spice and flavor that reminds me of home."
              </div>
              <div className="testimonial-author">
                <div className="author-name">Vikram S.</div>
                <div className="author-location">Hyderabad</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                "Best chicken lollipop I've had outside of Andhra Pradesh. The marinade penetrates right to the bone!"
              </div>
              <div className="testimonial-author">
                <div className="author-name">Ananya P.</div>
                <div className="author-location">Bangalore</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                "The family pack is our go-to order for weekend dinners. Consistently delicious and great value."
              </div>
              <div className="testimonial-author">
                <div className="author-name">Rahul & Family</div>
                <div className="author-location">Chennai</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="chicken-cta">
        <div className="container">
          <h2>Ready for Finger-Licking Good Chicken?</h2>
          <div className="cta-buttons">
          
            <a href="tel:+91 9618744164" className="btn btn-primary">Call to Order</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChickenSpecialties;