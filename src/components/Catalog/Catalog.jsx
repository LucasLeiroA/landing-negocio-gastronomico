import React, { useState } from 'react';
import { FaUtensils, FaHamburger, FaBirthdayCake, FaCoffee } from 'react-icons/fa';
import "./Catalog.css";

import image1 from '../../assets/menu-item-thumbnail-01.jpg';
import image2 from '../../assets/menu-item-thumbnail-02.jpg';
import image3 from '../../assets/menu-item-thumbnail-03.jpg';
import image4 from '../../assets/menu-item-thumbnail-04.jpg';
import image5 from '../../assets/menu-item-thumbnail-05.jpg';
import image6 from '../../assets/menu-item-thumbnail-06.jpg';
import image7 from '../../assets/menu-item-thumbnail-07.jpg';
import image8 from '../../assets/menu-item-thumbnail-08.jpg';
import image9 from '../../assets/menu-item-thumbnail-09.jpg';
import image10 from '../../assets/menu-item-thumbnail-10.jpg';

const menuData = {
  STARTERS: [
    { 
      name: 'GARLIC BREAD', 
      description: 'Toasted bread with tomatoes and basil.', 
      price: 12, 
      imgPath: image1 
    },
    { 
      name: 'MIXED SALAD', 
      description: 'Mushrooms stuffed with cheese and herbs.', 
      price: 10, 
      imgPath: image2 
    },
    { 
      name: 'BBQ CHICKEN WINGS', 
      description: 'Romaine lettuce with Caesar dressing.', 
      price: 15, 
      imgPath:image3
    },
  ],
  'MAIN DISHES': [
    { 
      name: 'MEAT FEAST PIZZA', 
      description: 'Salmon fillet grilled to perfection.', 
      price: 20, 
      imgPath: image4
    },
    { 
      name: 'CHICKEN TIKKA MASALA', 
      description: 'Tender beef in a creamy mushroom sauce.', 
      price: 22, 
      imgPath:image5
    },
    { 
      name: 'SPICY MEATBALLS', 
      description: 'Layers of pasta with vegetables and cheese.', 
      price: 18, 
      imgPath: image6
    },
  ],
  DESERT: [
    { 
      name: 'CHOCOLATE FUDGECAKE', 
      description: 'Coffee-flavored Italian dessert.', 
      price: 14, 
      imgPath:image7
    },
    { 
      name: 'TIRAMISU', 
      description: 'Creamy cheesecake with a graham cracker crust.', 
      price: 16, 
      imgPath:image8
    },
    { 
      name: 'CHEESCAKE', 
      description: 'Melted chocolate with fruit and marshmallows.', 
      price: 15, 
      imgPath:image9
    },
  ],
  DRINKS: [
    { 
      name: 'CHAMPAGNE', 
      description: 'Mint and lime cocktail.', 
      price: 25, 
      imgPath: image10
    },
    { 
      name: 'BEER', 
      description: 'A glass of rich red wine.', 
      price: 10, 
      imgPath:image1
    },
    { 
      name: 'ESPRESSO', 
      description: 'Freshly squeezed lemonade.', 
      price: 8, 
      imgPath:image3
    },
  ],
};

function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('STARTERS');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const getIcon = (category) => {
    switch (category) {
      case 'STARTERS':
        return <FaUtensils className="icon" />;
      case 'MAIN DISHES':
        return <FaHamburger className="icon" />;
      case 'DESERT':
        return <FaBirthdayCake className="icon" />;
      case 'DRINKS':
        return <FaCoffee className="icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="container-catalog">
      <h1>Our Menu</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptates id quam autem sed fuga porro commodi ullam optio! Aspernatur cumque, magnam perferendis natus nulla eligendi temporibus incidunt esse tempora impedit cum? Atque voluptatibus consectetur nihil nobis suscipit laudantium molestiae.</p>

      <div className="menu-categories">
        <ul>
          {Object.keys(menuData).map(category => (
            <li 
              key={category} 
              className={category === selectedCategory ? 'active' : ''} 
              onClick={() => handleCategoryChange(category)}
            >
              <div className="tab-title-menu">
                <h2>{category}</h2>
                <div className="icon">{getIcon(category)}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="menu-items2">
        {menuData[selectedCategory].map((dish, index) => (
          <div key={index} className="menu-item">
            <img src={dish.imgPath} alt={dish.name} className="menu-item-img" />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p className="menu-item-price">${dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
