import React from 'react';
import './SeafoodSpecials.css';

const SeafoodSpecials = () => {
  return (
    <div className="seafood-page">
      {/* Hero Section */}
      <section className="seafood-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Seafood Specials</h1>
          <p>Dive into the freshest catch from the coast</p>
          <div className="hero-buttons">
            <a href="/order" className="btn btn-primary">Explore Dishes</a>
            <a href="/menu" className="btn btn-secondary">Full Menu</a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="seafood-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Fresh from the Ocean to Your Plate</h2>
            <p>
              Our Seafood Specials feature the finest selection of fish, prawns, and crab,
              prepared using authentic coastal recipes. Experience the taste of the ocean
              with our chef-curated dishes that balance spice, flavor, and freshness.
            </p>
          </div>
          <div className="intro-image">
            <img 
              src="https://myfoodbook.com.au/sites/default/files/styles/schema_img/public/recipe_photo/Easy_As_Aussie_Seafood_Platter_vert%20copy.jpg" 
              alt="Seafood Platter" 
              className="seafood-main-image"
            />
          </div>
        </div>
      </section>

      {/* Seafood Items */}
      <section className="seafood-items" id="seafood-items">
        <div className="container">
          <h2>Our Coastal Delights</h2>
          <div className="seafood-grid">
            {/* Fish Specials */}
            <div className="seafood-category">
              <h3>Fish Dishes</h3>
              <div className="seafood-items-list">
                <div className="seafood-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6geK5MeFhR8ClWAwATasrux9Xr-NTyIX1w&s" alt="Fish Fry" />
                  <h4>Spicy Fish Fry</h4>
                  <p>Coastal-style fried fish with house spices</p>
                </div>
                <div className="seafood-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCYKDP_1AKPXc43wMIfe4sWCxTqbHV-91ivg&s" alt="Fish Curry" />
                  <h4>Chepala Pulusu</h4>
                  <p>Traditional tangy Andhra-style fish curry</p>
                </div>
              </div>
            </div>

            {/* Prawns Specials */}
            <div className="seafood-category">
              <h3>Prawns & Shrimp</h3>
              <div className="seafood-items-list">
                <div className="seafood-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGy00yiwe2js5wXy5lAQsh9ifmNk6R6IcEA&s" alt="Prawns Curry" />
                  <h4>Royyala Iguru</h4>
                  <p>Signature prawns curry with rich spices</p>
                </div>
                <div className="seafood-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwln4G8OgSTCpBRPBt3OxuZhidT4bFB-wVg&s" alt="Garlic Prawns" />
                  <h4>Garlic Butter Prawns</h4>
                  <p>Succulent prawns sautéed in garlic butter</p>
                </div>
              </div>
            </div>

            {/* Crab Specials */}
            <div className="seafood-category">
              <h3>Crab Specials</h3>
              <div className="seafood-items-list">
                <div className="seafood-item">
                  <img src="https://www.licious.in/blog/wp-content/uploads/2020/12/Crab-Curry-750x750.jpg" alt="Crab Masala" />
                  <h4>Crab Masala</h4>
                  <p>Hearty crab cooked in traditional spices</p>
                </div>
                <div className="seafood-item">
                  <img src="https://www.pepperdelight.com/wp-content/uploads/2016/03/pepper-delight-crab-roast-3.jpg" alt="Crab Fry" />
                  <h4>Crab Fry</h4>
                  <p>Dry-fried crab with aromatic seasoning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="seafood-experience">
        <div className="container">
          <div className="experience-content">
            <h2>An Oceanic Feast Like No Other</h2>
            <p>
              Our seafood dishes are prepared using time-honored coastal techniques,
              ensuring every bite is packed with authentic flavors. From fiery curries
              to delicately cooked seafood, we bring the coast to your table.
            </p>
            <ul className="experience-features">
              <li>Freshly sourced seafood daily</li>
              <li>Traditional coastal cooking methods</li>
              <li>Balanced flavors with customizable spice levels</li>
              <li>Perfect for seafood lovers & first-timers alike</li>
            </ul>
          </div>
          <div className="experience-image">
            <img 
              src="https://www.thefreshfishshop.com/cdn/shop/files/D3EA9DC8-6686-49CF-9B01-D92C5CE52EC1.jpg?v=1702250690" 
              alt="Seafood Experience" 
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="seafood-pricing">
        <div className="container">
          <h2>Seafood Feast Options</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Fish Feast</h3>
              <div className="price">₹499</div>
              <ul className="price-features">
                <li>3 premium fish dishes</li>
                <li>Unlimited rice & accompaniments</li>
                <li>1 dessert & buttermilk</li>
              </ul>
              <a href="/reservations" className="btn btn-primary">Book Now</a>
            </div>
            <div className="pricing-card featured">
              <div className="featured-badge">Most Popular</div>
              <h3>Prawns Special</h3>
              <div className="price">₹699</div>
              <ul className="price-features">
                <li>Signature prawns & shrimp delicacies</li>
                <li>Unlimited rice & accompaniments</li>
                <li>2 desserts & buttermilk</li>
              </ul>
              <a href="/reservations" className="btn btn-primary">Book Now</a>
            </div>
            <div className="pricing-card">
              <h3>Ultimate Crab Platter</h3>
              <div className="price">₹899</div>
              <ul className="price-features">
                <li>Premium crab & fish dishes</li>
                <li>Chef's special seafood curry</li>
                <li>2 desserts & complimentary drink</li>
              </ul>
              <a href="/reservations" className="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="seafood-testimonials">
        <div className="container">
          <h2>What Our Guests Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                "The prawns curry was out of this world! Fresh, flavorful, and perfectly spiced."
              </div>
              <div className="testimonial-author">
                <div className="author-name">Anil R.</div>
                <div className="author-location">Vishakhapatnam</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                "Crab masala was the star of the evening. I felt like I was dining by the sea!"
              </div>
              <div className="testimonial-author">
                <div className="author-name">Meera S.</div>
                <div className="author-location">Chennai</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                "A perfect place for seafood lovers. The garlic butter prawns were heavenly."
              </div>
              <div className="testimonial-author">
                <div className="author-name">Rahul K.</div>
                <div className="author-location">Hyderabad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="seafood-cta">
        <div className="container">
          <h2>Craving the Freshest Catch?</h2>
          <div className="cta-buttons">
           
            <a href="tel:+91 9618744164" className="btn btn-primary">Call to Book</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeafoodSpecials;
