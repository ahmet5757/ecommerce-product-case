import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import StarRating from './StarRating';

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState('yellow');

  const colorNames = {
    yellow: 'Yellow Gold',
    rose: 'Rose Gold', 
    white: 'White Gold'
  };

  
  const colorOrder = ['yellow', 'white', 'rose'];
  const orderedColors = colorOrder.filter(color => product.images[color]);

  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'left',
      borderRadius: '10px',
      margin: '10px',
      background: 'white'
    }}>
      <img 
        src={product.images[selectedColor]} 
        alt={product.name} 
        style={{ 
          width: '250px', 
          height: '250px', 
          borderRadius: '20px',
          objectFit: 'cover'
        }} 
      />
      <h3 style={{ 
        margin: '10px 0', 
        fontWeight: '500',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '15px',
        color: '#333'
      }}>{product.name}</h3>
      <div style={{ 
        fontSize: '15px', 
        fontWeight: '400',
        fontFamily: 'Montserrat, sans-serif',
        color: '#333',
        marginBottom: '10px'
      }}>
        ${product.price} USD
      </div>
      <ColorPicker 
        colors={orderedColors} 
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
      />
      <div style={{ 
        fontSize: '12px', 
        color: '#888', 
        margin: '5px 0',
        fontFamily: 'Avenir Book, Inter, sans-serif'
      }}>
        {colorNames[selectedColor]}
      </div>
      <StarRating score={product.popularityOutOfFive} />
    </div>
  );
};

export default ProductCard;