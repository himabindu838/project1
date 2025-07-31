import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Order.css';

const Order = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [cart, setCart] = useState([]);

  const menuData = {
    southIndian: {
        title: "South Indian",
        sections: [
          {
            title: "Snacks & Thindi",
            items: [
              { name: "IDLI", description: "Soft steamed rice cakes", price: 60, veg: true },
              { name: "VADA", description: "Deep-fried lentil donuts", price: 70, veg: true },
              { name: "KESARI BATH", description: "Sweet semolina dessert", price: 80, veg: true },
              { name: "KHARA BATH", description: "Spiced semolina", price: 90, veg: true },
              { name: "PONGAL", description: "Rice and lentil porridge", price: 100, veg: true }
            ],
            image: "https://www.idfreshfood.com/wp-content/uploads/2020/11/fefcs.jpg"
          },
          {
            title: "DOSE",
            items: [
              { name: "PLAIN DOSE", description: "Rice and urad dal crepe", price: 80, veg: true },
              { name: "MASALA DOSE", description: "Crepe with spiced potato", price: 120, veg: true },
              { name: "OPEN BUTTER MASALA DOSE", description: "Buttery masala dose", price: 150, veg: true },
              { name: "RAVA DOSE", description: "Semolina crepe", price: 100, veg: true },
              { name: "SET DOSE", description: "Fluffy rice pancakes", price: 110, veg: true }
            ],
            image: "https://www.shutterstock.com/image-photo/dosa-ghee-roast-coconut-chutney-600nw-2484376905.jpg"
          }
        ]
      },
      northIndian: {
        title: "North Indian",
        sections: [
          {
            title: "NORTH INDIAN CURRY",
            items: [
              { name: "ALOO GOBI", description: "Cauliflower and potatoes", price: 150, veg: true },
              { name: "ALOO JEERA (DRY)", description: "Potatoes with cumin", price: 140, veg: true },
              { name: "ALOO METHI", description: "Potatoes with fenugreek", price: 160, veg: true },
              { name: "ALOO MUTTER", description: "Potatoes and peas", price: 170, veg: true },
              { name: "BHINDI FRY", description: "Crispy fried okra", price: 180, veg: true }
            ],
            image: "https://paakashala.com/wp-content/uploads/2024/05/north_curry_1.webp"
          },
          {
            title: "ROTI KA PARIWAR",
            items: [
              { name: "ROTI", description: "Whole wheat bread", price: 20, veg: true },
              { name: "NAAN", description: "Leavened bread", price: 40, veg: true },
              { name: "KULCHA", description: "Variation of naan", price: 50, veg: true },
              { name: "BUTTER ROTI", description: "Roti with ghee", price: 30, veg: true },
              { name: "GARLIC NAAN", description: "Naan with garlic", price: 60, veg: true }
            ],
            image: "https://paakashala.com/wp-content/uploads/2024/05/rotti.webp"
          }
        ]
      },
      chinese: {
        title: "Chinese",
        sections: [
          {
            title: "CHINESE STARTERS",
            items: [
              { name: "GOBI MANCHURI", description: "Fried cauliflower", price: 180, veg: true },
              { name: "PANEER MANCHURI", description: "Cottage cheese in sauce", price: 200, veg: true },
              { name: "BABY CORN MANCHURI", description: "Baby corn in sauce", price: 190, veg: true },
              { name: "MUSHROOM MANCHURI", description: "Mushrooms in sauce", price: 210, veg: true },
              { name: "GOBI CHILLI", description: "Cauliflower in sauce", price: 180, veg: true }
            ],
            image: "https://paakashala.com/wp-content/uploads/2024/05/corn.webp"
          },
          {
            title: "CHINESE RICE & NOODLES",
            items: [
              { name: "VEG FRIED RICE", description: "Rice with vegetables", price: 160, veg: true },
              { name: "VEG NOODLES", description: "Noodles with vegetables", price: 150, veg: true },
              { name: "PANEER NOODLES", description: "Noodles with paneer", price: 180, veg: true },
              { name: "MUSHROOM FRIED RICE", description: "Rice with mushrooms", price: 170, veg: true },
              { name: "VEG SCHEZWAN NOODLES", description: "Spicy schezwan noodles", price: 170, veg: true }
            ],
            image: "https://paakashala.com/wp-content/uploads/2024/05/chinese.webp"
          }
        ]
      },
      chaats: {
        title: "Chaats",
        sections: [
          {
            title: "CHAATS",
            items: [
              { name: "SAMOSA", description: "Spiced potato pastry", price: 50, veg: true },
              { name: "DAHI PURI", description: "Puri with yogurt", price: 80, veg: true },
              { name: "CHEESE MASALA PAV", description: "Spiced vegetables with cheese", price: 120, veg: true },
              { name: "PAPADI CHAAT", description: "Crispy papadis with toppings", price: 90, veg: true },
              { name: "SEV PURI", description: "Puri with sev and chutneys", price: 80, veg: true }
            ],
            image: "https://paakashala.com/wp-content/uploads/2024/05/chaats_2.webp"
          }
        ]
      },
      desserts: {
        title: "Desserts",
        sections: [
          {
            title: "DESSERTS",
            items: [
              { name: "GULAB JAMOON", description: "Milk dumplings in syrup", price: 80, veg: true },
              { name: "CARROT HALWA", description: "Grated carrot dessert", price: 100, veg: true },
              { name: "CHANDRAHARA", description: "Flaky pastry", price: 70, veg: true },
              { name: "HAL BAI", description: "Yogurt-based curry", price: 90, veg: true },
              { name: "FRUIT MIXTURE", description: "Seasonal fruits", price: 120, veg: true }
            ],
            image: "https://paakashala.com/wp-content/uploads/2024/05/halwa-1.webp"
          }
        ]
    }
  };

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.name === item.name 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemName) => {
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem.quantity > 1) {
      setCart(cart.map(item => 
        item.name === itemName 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ));
    } else {
      setCart(cart.filter(item => item.name !== itemName));
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const renderMenuSection = (section, index) => (
    <div key={index} className="order-section">
      <div className="section-header">
        <h3 className="section-title">{section.title}</h3>
        {section.image && (
          <img 
            src={section.image} 
            alt={section.title} 
            className="section-image"
            loading="lazy"
          />
        )}
      </div>
      <div className="menu-items">
        {section.items.map((item, idx) => (
          <div key={idx} className="menu-item">
            <div className="item-info">
              <div className="item-veg-icon">
                {item.veg ? (
                  <span className="veg-icon">🟢</span>
                ) : (
                  <span className="non-veg-icon">🔴</span>
                )}
              </div>
              <div className="item-details">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-description">{item.description}</p>
                <p className="item-price">₹{item.price}</p>
              </div>
            </div>
            <div className="item-actions">
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(item)}
              >
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch(activeTab) {
      case 'all':
        return Object.values(menuData).flatMap(cuisine => 
          cuisine.sections.map((section, index) => renderMenuSection(section, index))
        );
      case 'southIndian':
        return menuData.southIndian.sections.map((section, index) => 
          renderMenuSection(section, index)
        );
      case 'northIndian':
        return menuData.northIndian.sections.map((section, index) => 
          renderMenuSection(section, index)
        );
      case 'chinese':
        return menuData.chinese.sections.map((section, index) => 
          renderMenuSection(section, index)
        );
      case 'chaats':
        return menuData.chaats.sections.map((section, index) => 
          renderMenuSection(section, index)
        );
      case 'desserts':
        return menuData.desserts.sections.map((section, index) => 
          renderMenuSection(section, index)
        );
      default:
        return Object.values(menuData).flatMap(cuisine => 
          cuisine.sections.map((section, index) => renderMenuSection(section, index))
        );
    }
  };

  return (
    <div className="order-container">
      <div className="order-header">
        <h1 className="restaurant-name">The Andhra Spices</h1>
        <p className="restaurant-info">South Indian • North Indian • Chinese • ₹200 for two</p>
      </div>

      <div className="order-tabs">
        <button 
          className={`order-tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button 
          className={`order-tab ${activeTab === 'southIndian' ? 'active' : ''}`}
          onClick={() => setActiveTab('southIndian')}
        >
          South Indian
        </button>
        <button 
          className={`order-tab ${activeTab === 'northIndian' ? 'active' : ''}`}
          onClick={() => setActiveTab('northIndian')}
        >
          North Indian
        </button>
        <button 
          className={`order-tab ${activeTab === 'chinese' ? 'active' : ''}`}
          onClick={() => setActiveTab('chinese')}
        >
          Chinese
        </button>
        <button 
          className={`order-tab ${activeTab === 'chaats' ? 'active' : ''}`}
          onClick={() => setActiveTab('chaats')}
        >
          Chaats
        </button>
        <button 
          className={`order-tab ${activeTab === 'desserts' ? 'active' : ''}`}
          onClick={() => setActiveTab('desserts')}
        >
          Desserts
        </button>
      </div>

      <div className="order-content">
        {renderTabContent()}
      </div>

      {cart.length > 0 && (
        <div className="cart-container">
          <div className="cart-header">
            <h3>Your Order</h3>
            <span className="cart-count">{cart.reduce((total, item) => total + item.quantity, 0)} ITEMS</span>
          </div>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-info">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">₹{item.price * item.quantity}</span>
                </div>
                <div className="cart-item-actions">
                  <button 
                    className="quantity-btn"
                    onClick={() => removeFromCart(item.name)}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <span>Total</span>
            <span>₹{calculateTotal()}</span>
          </div>
          <Link 
            to="/checkout" 
            state={{ cartItems: cart, totalAmount: calculateTotal() }}
            className="checkout-btn"
          >
            PROCEED TO CHECKOUT
          </Link>
        </div>
      )}
    </div>
  );
};

export default Order;