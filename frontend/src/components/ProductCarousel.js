import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sol ok bileşeni
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: 'absolute',
        left: window.innerWidth <= 600 ? '10px' : '-30px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        boxShadow: 'none',
        border: 'none',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      <svg width="28" height="28" viewBox="0 0 28 28">
        <polyline
          points="18,6 10,14 18,22"
          fill="none"
          stroke="#222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// Sağ ok bileşeni
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: 'absolute',
        right: window.innerWidth <= 600 ? '10px' : '-30px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        boxShadow: 'none',
        border: 'none',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      <svg width="28" height="28" viewBox="0 0 28 28">
        <polyline
          points="10,6 18,14 10,22"
          fill="none"
          stroke="#222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const ProductCarousel = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
