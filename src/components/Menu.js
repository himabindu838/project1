import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('all');

  const menuData = {
    southIndian: {
      title: "South Indian",
      sections: [
        {
          title: "Snacks & Thindi",
          items: [
            { name: "IDLI", description: "Soft steamed rice cakes made from a batter of fermented rice and black lentils" },
            { name: "VADA", description: "Deep-fried lentil donuts seasoned with spices" },
            { name: "KESARI BATH", description: "A sweet semolina dessert enriched with ghee, saffron, and garnished with cashews" },
            { name: "KHARA BATH", description: "Semolina spiced with mustard seeds, curry leaves, and vegetables" },
            { name: "PONGAL", description: "A savoury rice and lentil porridge, seasoned with aromatic spices, ghee, and garnished with cashews" }
          ],
          image: "https://www.idfreshfood.com/wp-content/uploads/2020/11/fefcs.jpg"
        },
        {
          title: "DOSE",
          items: [
            { name: "PLAIN DOSE", description: "A thin, fermented rice and urad dal crepe, served with coconut chutney and tangy sambar" },
            { name: "MASALA DOSE", description: "A thin rice crepe filled with spiced potato, served with coconut chutney and tangy sambar" },
            { name: "OPEN BUTTER MASALA DOSE", description: "Thin rice crepe filled with spiced mashed potatoes, butter and garnished with cilantro and coconut chutney" },
            { name: "RAVA DOSE", description: "A fermented semolina batter, crisped to perfection, served with coconut chutney and tangy sambar" },
            { name: "SET DOSE", description: "Soft and fluffy rice and urad dal pancakes, served in a set of three, with onion and carrot toppings" }
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
            { name: "ALOO GOBI", description: "Fresh cauliflower and potatoes sautéed with aromatic spices." },
            { name: "ALOO JEERA (DRY)", description: "Potatoes tossed with cumin seeds, creating a flavourful dry dish" },
            { name: "ALOO METHI", description: "Potatoes cooked with fenugreek leaves, delivering a delightful herbal twist" },
            { name: "ALOO MUTTER", description: "Potatoes and peas in a spiced tomato-based gravy" },
            { name: "BHINDI FRY", description: "Crispy fried okra seasoned with Indian spices" }
          ],
          image: "https://paakashala.com/wp-content/uploads/2024/05/north_curry_1.webp"
        },
        {
          title: "ROTI KA PARIWAR",
          items: [
            { name: "ROTI", description: "A classic unleavened Indian bread made with whole wheat flour, water, and a pinch of salt." },
            { name: "NAAN", description: "Soft, leavened bread crafted from refined flour, yogurt, yeast, and a touch of ghee." },
            { name: "KULCHA", description: "A delightful variation of naan, featuring all-purpose flour, yogurt, and baking powder for a lighter texture." },
            { name: "BUTTER ROTI", description: "Our traditional roti generously brushed with clarified butter (ghee) for a rich and flavourful experience." },
            { name: "GARLIC NAAN", description: "Naan infused with minced garlic, offering a savory and aromatic twist to your dining experience." }
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
            { name: "GOBI MANCHURI", description: "Marinate cauliflower florets in a seasoned batter & deep-fry to perfection and toss with chilli Manchurian sauce" },
            { name: "PANEER MANCHURI", description: "Cottage cheese tossed in a flavourful blend of soy sauce, ginger, garlic, tomato sauce, and green onions, creating a delightful Indo-Chinese fusion dish" },
            { name: "BABY CORN MANCHURI", description: "Tender baby corn coated in a zesty batter, deep-fried to golden perfection, and tossed in a tangy Manchurian sauce made with soy sauce, ginger, garlic, and a hint of sweetness" },
            { name: "MUSHROOM MANCHURI", description: "Tender mushrooms tossed in a flavourful blend of soy sauce, ginger, garlic, tomato sauce, and green onions, creating a delightful Indo-Chinese fusion dish" },
            { name: "GOBI CHILLI", description: "Marinated Cauliflower florets in seasoned batter, perfectly deep-fried and generously coated in a flavourful manchurian sauce." }
          ],
          image: "https://paakashala.com/wp-content/uploads/2024/05/corn.webp"
        },
        {
          title: "CHINESE RICE & NOODLES",
          items: [
            { name: "VEG FRIED RICE", description: "A blend of jasmine rice, colourful mixed vegetables, scrambled tofu, and a dash of soy sauce, wok-tossed to perfection." },
            { name: "VEG NOODLES", description: "Thin eggless noodles stir-fried with an assortment of crisp vegetables and seasoned with a light soy-based sauce." },
            { name: "PANEER NOODLES", description: "Soft paneer chunks mingling with eggless noodles, crisp vegetables, and a subtle blend of spices." },
            { name: "MUSHROOM FRIED RICE", description: "Fragrant jasmine rice stir-fried with plump mushrooms, vibrant vegetables, and a touch of soy sauce, creating a savory and satisfying dish." },
            { name: "VEG SCHEZWAN NOODLES", description: "Eggless noodles bathed in a bold Schezwan sauce, combined with a medley of vegetables." }
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
            { name: "SAMOSA", description: "Triangular pastry pockets filled with spiced potatoes, peas, and Indian spices, deep-fried until golden brown." },
            { name: "DAHI PURI", description: "Hollow puris filled with spiced potatoes, chickpeas, and topped with yogurt, tamarind chutney, and sev." },
            { name: "CHEESE MASALA PAV", description: "Mixed vegetables cooked in a flavorful spice blend, served with buttered buns and topped with melted cheese." },
            { name: "PAPADI CHAAT", description: "Crispy papadis topped with potatoes, chickpeas, yogurt, and various chutneys." },
            { name: "SEV PURI", description: "Flat puris topped with spiced mashed potatoes, onions, sev, and chutneys." }
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
            { name: "GULAB JAMOON", description: "Deep-fried milk dumplings soaked in sugar syrup, flavoured with cardamom and rose water, and topped with pistachios." },
            { name: "CARROT HALWA", description: "Finely grated carrots cooked with ghee, milk, sugar, and cardamom, garnished with chopped nuts." },
            { name: "CHANDRAHARA", description: "Flaky pastry made from all-purpose flour, ghee, and a touch of sugar, deep-fried to golden perfection." },
            { name: "HAL BAI", description: "Creamy yogurt-based curry with fenugreek leaves, mustard seeds, and aromatic Indian spices." },
            { name: "FRUIT MIXTURE", description: "Fresh seasonal fruits tossed in a light citrus dressing." }
          ],
          image: "https://paakashala.com/wp-content/uploads/2024/05/halwa-1.webp"
        }
      ]
    }
  };

  const renderMenuSection = (section, index) => (
    <div key={index} className="menu-section">
      <div className="menu-image-container">
        <img 
          src={section.image} 
          alt={section.title} 
          className="menu-image"
          loading="lazy"
        />
      </div>
      <div className="menu-items-container">
        <h3 className="menu-section-title">{section.title}</h3>
        <ul className="menu-items-list">
          {section.items.map((item, idx) => (
            <li key={idx} className="menu-item">
              <div className="menu-item-text">
                <div className="menu-item-header">
                  <span className="menu-item-title">{item.name}</span>
                </div>
                <p className="menu-item-description">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderAllMenuSections = () => {
    return Object.values(menuData).flatMap(cuisine => 
      cuisine.sections.map((section, index) => renderMenuSection(section, index))
    );
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'all':
        return renderAllMenuSections();
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
        return renderAllMenuSections();
    }
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1 className="menu-title">The Andhra Spices Menu</h1>
        <img 
          src="https://paakashala.com/wp-content/uploads/2024/02/hedbtmicon.png" 
          alt="Culture of Care: Discover the Paakashala Difference" 
          className="menu-icon"
        />
      </div>
      
      <div className="menu-intro">
        <p>Explore a World of Authentic Vegetarian Flavours.</p>
        <a 
          href="" 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-menu-button"
        >
          <span className="button-icon">
            <svg aria-hidden="true" className="utensils-icon" viewBox="0 0 416 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"></path>
            </svg>
          </span>
          
        </a>
      </div>

      <div className="menu-tabs">
        <button 
          className={`menu-tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button 
          className={`menu-tab ${activeTab === 'southIndian' ? 'active' : ''}`}
          onClick={() => setActiveTab('southIndian')}
        >
          South Indian
        </button>
        <button 
          className={`menu-tab ${activeTab === 'northIndian' ? 'active' : ''}`}
          onClick={() => setActiveTab('northIndian')}
        >
          North Indian
        </button>
        <button 
          className={`menu-tab ${activeTab === 'chinese' ? 'active' : ''}`}
          onClick={() => setActiveTab('chinese')}
        >
          Chinese
        </button>
        <button 
          className={`menu-tab ${activeTab === 'chaats' ? 'active' : ''}`}
          onClick={() => setActiveTab('chaats')}
        >
          Chaats
        </button>
        <button 
          className={`menu-tab ${activeTab === 'desserts' ? 'active' : ''}`}
          onClick={() => setActiveTab('desserts')}
        >
          Desserts
        </button>
      </div>

      <div className="menu-content">
        {renderTabContent()}
      </div>

      {/* <div className="menu-footer">
        <a 
          href="https://paakashala.com/paakashala_full_menu.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-menu-button"
        >
          <span className="button-icon">
            <svg aria-hidden="true" className="utensils-icon" viewBox="0 0 416 512" xmlns="http://www.w3.org/2000/svg">
              <path d="https://www.shutterstock.com/image-photo/dosa-ghee-roast-coconut-chutney-600nw-2484376905.jpg"></path>
            </svg>
          </span>
          <span className="button-text">View Full Menu</span>
        </a>
      </div> */}
    </div>
  );
};

export default Menu;