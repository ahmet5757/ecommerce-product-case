import React, { useEffect, useState } from 'react';
import './App.css';
import ProductCarousel from './components/ProductCarousel';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px'
      }}>
        Ürünler yükleniyor...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        color: 'red'
      }}>
        Hata: {error}
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <header className="text-center py-4">
              <h1 className="mb-0" style={{ 
                color: '#333',
                fontFamily: 'Avenir Book, Inter, sans-serif',
                fontWeight: 'normal',
                fontSize: '45px'
              }}>
                Product List
              </h1>
            </header>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <ProductCarousel products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;