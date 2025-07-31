import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Slide data
  const slides = [
    {
      img: "https://www.mistay.in/travel-blog/content/images/2020/06/andhra-cuisine-cover-2.jpg",
      alt: "Andhra Spices Restaurant",
      title: "Authentic Andhra Cuisine",
      subtitle: "Experience the fiery flavors of traditional Andhra Pradesh",
      btnText: "Explore Menu",
      btnLink: "/menu"
    },
    {
      img: "https://images.jdmagicbox.com/v2/comp/bangalore/v6/080pxx80.xx80.211101231107.w7v6/catalogue/andhra-gunpowder-ashoknagar-bangalore-restaurants-nw1b4q71uy.jpg",
      alt: "Andhra Chicken Curry",
      title: "Andhra Kodi Kura",
      subtitle: "Fiery chicken curry with authentic Andhra spices",
      btnText: "Try Today",
      btnLink: "/chickenspecials"
    },
    {
      img: "https://img.freepik.com/premium-photo/plate-prawns-with-black-background_398492-4375.jpg",
      alt: "Andhra Prawns Curry",
      title: "Royyala Pulusu",
      subtitle: "Prawns cooked in tangy tamarind gravy",
      btnText: "View Seafood Menu",
      btnLink: "/seafood"
    },
    {
      img: "https://img.freepik.com/free-photo/delicious-food-table_23-2150857814.jpg?semt=ais_hybrid&w=740&q=80",
      alt: "Andhra Vegetarian Thali",
      title: "Andhra Veg Thali",
      subtitle: "Complete meal with 12+ authentic dishes",
      btnText: "Book Now",
      btnLink: "/andhra"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Slider Section */}
      <section className="fullwidth-slider">
        <div className="slider-container">
          {slides.map((slide, idx) => (
            <div className={`slider-slide${currentSlide === idx ? ' active' : ''}`} key={idx} style={{ display: currentSlide === idx ? 'block' : 'none' }}>
              <img 
                src={slide.img}
                alt={slide.alt}
                className="desktop-img"
              />
              <div className="slide-overlay">
                <div className="slide-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <a href={slide.btnLink} className="btn btn-slider" style={{color:"white"}}>{slide.btnText}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-controls">
          <button className="slider-arrow prev" onClick={goToPrevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
            </svg>
          </button>
          <button className="slider-arrow next" onClick={goToNextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </button>
          <div className="slider-dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={currentSlide === idx ? 'active' : ''}
                onClick={() => goToSlide(idx)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-column">
            <img src="https://www.sattvam.com/wp-content/uploads/2019/03/Elephant.png" alt="Andhra Chilli" />
          </div>
          <div className="welcome-column">
            <h1>Welcome To Andhra Spices</h1>
            <p>
              At Andhra Spices, we bring you the authentic taste of Andhra Pradesh's rich culinary heritage. Known for our fiery flavors and aromatic spices, we've been serving traditional Andhra meals for over 15 years. Our menu features classic dishes from all regions of Andhra, prepared with traditional methods and the freshest ingredients.
            </p>
            <a href="/aboutus" className="btn">
              OUR STORY
            </a>
          </div>
          <div className="welcome-column">
            <img src="https://www.sattvam.com/wp-content/uploads/2019/03/Goopara.jpg" alt="Andhra Thali" />
          </div>
        </div>
      </section>

      {/* Food Fit for Gods Section */}
      <section className="food-gods-section">
        <div className="container">
         
          <h1><b>Traditional Recipes Passed Through Generations</b></h1>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="featured-dishes">
        <div className="dish-row">
          <div className="dish-column">
            <h1>Gongura Chicken</h1>
            <p>Our signature dish featuring tender chicken cooked with gongura (sorrel leaves) - a perfect balance of tangy and spicy flavors that Andhra cuisine is famous for.</p>
          </div>
          <div className="dish-column">
            <img src="https://jeerapeppers.com/wp-content/uploads/2022/11/andhra-special-gongura-chicken-pachadi-kodi-pickle-homemade-350gms.jpg" alt="Gongura Chicken" />
          </div>
          <div className="dish-column">
            <h1>Royyala Iguru</h1>
            <p>Succulent prawns cooked in traditional Andhra style with aromatic spices and a fiery red chilli paste that will tantalize your taste buds.</p>
          </div>
        </div>
        
        <div className="dish-row">
          <div className="dish-column">
            <img src="https://aahaaramonline.com/wp-content/uploads/2019/04/Andhra_Nuvvula_Chintapandu_Pulihora_1.jpg" alt="Pulihora" />
          </div>
          <div className="dish-column">
            <h1>Pulihora</h1>
            <p>The quintessential Andhra tamarind rice, bursting with flavors of mustard seeds, curry leaves, peanuts and the perfect tangy-sour taste.</p>
          </div>
          <div className="dish-column">
            <img src="https://www.shutterstock.com/image-photo/andhra-pradesh-traditional-thali-india-600nw-2172140155.jpg" alt="Andhra Meals" />
          </div>
        </div>
        
        <div className="full-menu-btn">
          <a href="/menu" className="btn">FULL MENU</a>
        </div>
      </section>

      {/* Banquets Section */}
      <section className="ananta-section">
        <div className="container">
          <div className="ananta-column">
            <img src="https://cdn0.weddingwire.in/article/4333/original/1280/jpg/123334-maharaja-bhog-2.jpeg" alt="Andhra Spices Banquets" />
          </div>
          <div className="ananta-column">
            <h1>Andhra Spices Banquets</h1>
            <div className="divider"></div>
            <p>Celebrate your special occasions with authentic Andhra flavors. Our banquet hall is perfect for weddings, birthdays, anniversaries, and corporate events.</p>
            <p>With traditional decor and authentic Andhra hospitality, we create memorable dining experiences for you and your guests.</p>
           
          </div>
        </div>
      </section>

      {/* Outdoor Catering Section */}
      <section className="catering-section">
        <div className="container">
          <div className="catering-column">
            <h1>Outdoor Catering</h1>
            <div className="divider"></div>
            <p>Bring the authentic taste of Andhra to your home or event venue with our catering services. We specialize in traditional Andhra weddings, housewarmings, and other celebrations.</p>
            <p>Our catering team will work with you to create a customized menu that brings the authentic flavors of Andhra Pradesh to your event.</p>
           
          </div>
          <div className="catering-column">
            <img src="https://www.nagarjunarestaurants.com/images/thestory.jpg" alt="Andhra Catering" />
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="bakes-section">
        <div className="container">
          <div className="bakes-column">
            <img src="https://balajipapalalsweets.weebly.com/uploads/3/8/2/7/38272777/header_images/1413150604.jpg" alt="Andhra Sweets" />
          </div>
          <div className="bakes-column">
            <h1>Andhra Specialties</h1>
            <div className="divider"></div>
            <p>Discover our range of traditional Andhra sweets and snacks that you can take home. From the famous Pootharekulu to Bandar Laddu, we prepare these delicacies using traditional methods.</p>
            <p>We also offer homemade pickles and powders that capture the authentic flavors of Andhra cuisine.</p>
          </div>
        </div>
      </section>

      {/* Food Festivals Section */}
      <section className="festivals-section">
        <div className="container">
          <div className="festivals-column">
            
            <h1>Andhra Food Festivals</h1>
            <div className="divider"></div>
            <p>Join us for our special food festivals where we showcase regional specialties from different parts of Andhra Pradesh. Each month we feature a different region's cuisine.</p>
            <p>From the spicy dishes of Guntur to the seafood specialties of coastal Andhra, our festivals are a celebration of Andhra's diverse culinary heritage.</p>
         
          </div>
          <div className="festivals-column">
            <img src="https://media.assettype.com/indulgexpress%2F2024-03%2F319e3e16-f312-4a15-af7e-f4d9dacabbb4%2FFour_Points_by_Sheraton_Mahabalipuram_Resort___Convention_Center_presents__Godavari_Ruchulu__a_culin.jpg?w=480&auto=format%2Ccompress&fit=max" alt="Andhra Food Festival" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          
          <div className="faq-grid">
            <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}>
              <h3 onClick={() => toggleFaq(0)}>What makes Andhra cuisine unique?</h3>
              <p>Andhra cuisine is known for its bold, spicy flavors and generous use of red chillies, tamarind, and aromatic spices. Our dishes feature traditional cooking methods and authentic recipes passed down through generations, making them distinct from other regional Indian cuisines.</p>
            </div>
            
            <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
              <h3 onClick={() => toggleFaq(1)}>How spicy are your dishes?</h3>
              <p>Our dishes maintain the authentic spice levels of traditional Andhra cuisine. However, we can adjust the spice level according to your preference. Just let our staff know your spice tolerance, and we'll customize your meal accordingly.</p>
            </div>
            
            <div className={`faq-item ${activeFaq === 2 ? 'active' : ''}`}>
              <h3 onClick={() => toggleFaq(2)}>Do you offer vegetarian options?</h3>
              <p>Yes! We have an extensive vegetarian menu featuring traditional Andhra vegetarian dishes like Gongura Pachadi, Pesarattu, Pulihora, and our famous Andhra Veg Thali with 12+ authentic vegetarian dishes.</p>
            </div>
            
            <div className={`faq-item ${activeFaq === 3 ? 'active' : ''}`}>
              <h3 onClick={() => toggleFaq(3)}>What are your signature dishes?</h3>
              <p>Our signature dishes include Gongura Chicken, Royyala Iguru (Prawns), Andhra Kodi Kura (Chicken Curry), Pulihora (Tamarind Rice), and our traditional Andhra Meals. Each dish is prepared using authentic recipes and traditional cooking methods.</p>
            </div>
            
            <div className={`faq-item ${activeFaq === 4 ? 'active' : ''}`}>
              <h3 onClick={() => toggleFaq(4)}>Do you take reservations?</h3>
              <p>Yes, we accept reservations for both lunch and dinner. For large groups, special occasions, or weekend dining, we recommend making a reservation in advance. You can call us or book online through our website.</p>
            </div>
            
            <div className={`faq-item ${activeFaq === 5 ? 'active' : ''}`}>
              <h3 onClick={() => toggleFaq(5)}>What are your operating hours?</h3>
              <p>We are open daily from 11:00 AM to 3:30 PM for lunch and 6:30 PM to 11:00 PM for dinner. We remain open on all days including weekends and holidays to serve you authentic Andhra cuisine.</p>
            </div>
            
            <div className={`faq-item ${activeFaq === 6 ? 'active' : ''}`}>
              <h3 onClick={() => toggleFaq(6)}>Do you offer catering services?</h3>
              <p>Yes, we provide comprehensive catering services for weddings, corporate events, housewarmings, and other celebrations. Our catering menu includes traditional Andhra dishes and can be customized according to your requirements and guest count.</p>
            </div>
            
            <div className={`faq-item ${activeFaq === 7 ? 'active' : ''}`}>
              <h3 onClick={() => toggleFaq(7)}>Is parking available?</h3>
              <p>Yes, we have dedicated parking space available for our customers. The parking area is well-lit and secure, making it convenient for families and groups visiting our restaurant.</p>
            </div>
            
            <div className={`faq-item ${activeFaq === 8 ? 'active' : ''}`}>
              <h3 onClick={() => toggleFaq(8)}>Do you serve alcohol?</h3>
              <p>We are a family restaurant and do not serve alcohol. However, we offer a variety of traditional Andhra beverages like buttermilk, fresh juices, and our special Andhra-style filter coffee to complement your meal.</p>
            </div>
            
            <div className={`faq-item ${activeFaq === 9 ? 'active' : ''}`}>
              <h3 onClick={() => toggleFaq(9)}>Can I order food for takeaway?</h3>
              <p>Yes, we offer takeaway services for all our dishes. You can call us to place your order or visit our restaurant to order in person. We ensure that takeaway orders are packed properly to maintain the authentic taste and temperature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h1>Testimonials</h1>
      
      
          
          <div className="testimonials-grid">
            <div className="testimonial">
              <img src="https://www.sattvam.com/wp-content/uploads/2018/05/stars.png" alt="5 Stars" />
              <h4>"Authentic Andhra Taste"</h4>
              <p>"The Gongura Mamsam here takes me back to my grandmother's kitchen in Vijayawada. Truly authentic Andhra flavors that are hard to find elsewhere in Vizag."</p>
              <p><strong>Ramesh Kumar</strong></p>
            </div>
            
            <div className="testimonial">
              <img src="https://www.sattvam.com/wp-content/uploads/2018/05/stars.png" alt="5 Stars" />
              <h4>"Best Andhra Meals in Town"</h4>
              <p>"Their unlimited meals option is fantastic - you get to taste so many authentic Andhra dishes in one sitting. The curd rice at the end is the perfect finish."</p>
              <p><strong>Priya Reddy</strong></p>
            </div>
            
            <div className="testimonial">
              <img src="https://www.sattvam.com/wp-content/uploads/2018/05/stars.png" alt="5 Stars" />
              <h4>"Perfect Spice Level"</h4>
              <p>"As someone who loves spicy food, I appreciate how they maintain the authentic spice levels of Andhra cuisine without compromising on flavor."</p>
              <p><strong>Arjun Naidu</strong></p>
            </div>
            
            <div className="testimonial">
              <img src="https://www.sattvam.com/wp-content/uploads/2018/05/stars.png" alt="5 Stars" />
              <h4>"Great for Family Dinners"</h4>
              <p>"We've been coming here for years for our family gatherings. The service is excellent and the food consistently delicious."</p>
              <p><strong>The Rao Family</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Locations Section */}
      <section className="hours-locations-section">
  <p>Hours of Operation</p>
  <h3>OPEN ALL DAYS</h3>
  <p>11:00am – 3:30pm & 6:30pm – 11:00pm</p>

  <h1>Our Location</h1>


  <div className="location">
    <h2>Visakhapatnam (Vizag)</h2>
    <h4>MVP Colony</h4>
    <p>
      12-34-56, Near RTC Complex, MVP Colony,<br />
      Visakhapatnam - 530017<br />
      Ph: +91 9618744164
    </p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.3456789012345!2d83.30000000000001!3d17.735000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ0JzA2LjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen="" 
      title="Andhra Spices Vizag Location"
    />
  </div>
</section>
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

export default Home;