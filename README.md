# E-Commerce Product Showcase Application

This project is a responsive e-commerce product showcase application developed using modern web technologies. It is a React-based solution with a user-friendly interface that performs dynamic pricing based on real-time gold prices.

## Project Overview

This application demonstrates how product showcases can be designed effectively and modernly in e-commerce platforms. Real-time data integration is provided through a dynamic pricing system linked to gold prices.

## Technical Features

### Frontend Development
- **React 18**: Modern component-based architecture
- **Bootstrap 5**: Responsive grid system and utility classes
- **React Slick**: Smooth carousel functionality
- **Custom CSS**: Custom design implementation

### Backend Development
- **Node.js**: Server-side runtime environment
- **Express.js**: RESTful API framework
- **Axios**: HTTP client for external API calls
- **CORS**: Cross-origin resource sharing

### Responsive Design
- **Desktop**: 1024px+ (4 products display)
- **Tablet**: 768px-1024px (3 products display)
- **Mobile**: 480px-768px (2 products display)
- **Small Mobile**: <480px (1 product display)

## Installation and Setup

### System Requirements
- Node.js (v14 or higher)
- npm package manager

### Backend Installation
```bash
cd backend
npm install
npm start
```

### Frontend Installation
```bash
cd frontend
npm install
npm start
```

## Project Architecture

```
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductCarousel.js    # Product carousel component
│   │   │   ├── ProductCard.js        # Product card component
│   │   │   ├── ColorPicker.js        # Color picker component
│   │   │   └── StarRating.js         # Star rating component
│   │   ├── assets/
│   │   │   └── fonts/                # Custom font files
│   │   ├── App.js                    # Main application component
│   │   ├── App.css                   # Main style file
│   │   └── index.js                  # Application entry point
│   └── package.json
├── backend/
│   ├── server.js                     # Express server
│   ├── products.json                 # Product data
│   └── package.json
└── README.md
```

## API Endpoints

### GET /products
Returns the product list. Each product includes the following information:
- Dynamic price calculation (based on gold price)
- Popularity score (out of 5)
- Color options (Yellow Gold, Rose Gold, White Gold)
- Product images (separate for each color)

## Design System

### Typography
- **Main Title**: Avenir Book, 45px
- **Product Title**: Montserrat Medium, 15px
- **Price Information**: Montserrat Regular, 15px
- **Color Information**: Avenir Book, 12px
- **Rating Information**: Avenir Book, 14px

### Color Palette
- **Primary**: #333 (Dark Gray)
- **Background**: #fff (White)
- **Accent**: #FFD700 (Gold)
- **Text Secondary**: #666 (Medium Gray)

## Development Process

This project was developed following modern web development best practices:

1. **Component-Based Architecture**: Modular and reusable components
2. **Responsive Design**: Optimal appearance on all devices
3. **API Integration**: Real-time data integration
4. **Performance Optimization**: Lazy loading and efficient rendering
5. **User Experience**: Intuitive navigation and smooth interactions

## Deployment

### Frontend Deployment (Vercel)
Deployed on: [https://ecommerce-product-case-frontend.vercel.app](https://ecommerce-product-case.vercel.app)

### Backend Deployment (Render)
Deployed on: [https://ecommerce-product-case-backend.onrender.com/products](https://ecommerce-product-case-backend.onrender.com/products)


## Live Demo

- 🔗 Frontend (Vercel): [https://ecommerce-product-case-frontend.vercel.app](https://ecommerce-product-case.vercel.app)
- 🔗 Backend (Render): [https://ecommerce-product-case-backend.onrender.com/products](https://ecommerce-product-case-backend.onrender.com/products)


## Developer Notes

This project was developed to demonstrate effective use of modern web technologies. Responsive design principles, dynamic data integration, and user experience-focused development approach were adopted.

The project serves as a reference implementation designed to solve common problems encountered in e-commerce platforms.

