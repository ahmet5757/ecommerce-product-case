import React from 'react';

const StarRating = ({ score }) => {
  const stars = [];
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push('★');
    } else if (i === fullStars && hasHalfStar) {
      stars.push('☆');
    } else {
      stars.push('☆');
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
      {stars.map((star, index) => (
        <span 
          key={index} 
          style={{ 
            color: star === '★' ? '#FFD700' : '#ccc', 
            fontSize: '18px',
            marginRight: '2px'
          }}
        >
          {star}
        </span>
      ))}
      <span style={{ 
        marginLeft: '8px', 
        fontSize: '14px', 
        color: '#666',
        fontFamily: 'Avenir Book, Inter, sans-serif'
      }}>
        {score}/5
      </span>
    </div>
  );
};

export default StarRating;