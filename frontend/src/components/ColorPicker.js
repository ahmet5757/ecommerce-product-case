import React from 'react';

// ColorPicker: Renk seçici butonlar
const ColorPicker = ({ colors, selectedColor, onColorChange }) => {
  const colorMap = {
    yellow: '#E6CA97', // Altın sarısı
    rose: '#E1A4A9',   // Gül altını
    white: '#D9D9D9'   // Beyaz altın
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '10px 0', width: '100%' }}>
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => onColorChange(color)}
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            marginRight: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: selectedColor === color ? '1.5px solid gray' : 'none',
            boxSizing: 'border-box',
            transition: 'border 0.2s'
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: '50%',
              backgroundColor: colorMap[color],
              border: 'none'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;