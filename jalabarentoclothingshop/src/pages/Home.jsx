import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Sidebar isLoggedIn={true} />
      <main className="main-content">
        <h2 className="section-title">Best Seller</h2>
        
        <div className="product-grid">
          {}
          <div className="item-card">
            <img src="/product1.png" alt="Product" />
            <p>White Shirt</p>
            <p className="price">₱700</p>
          </div>

          {}
          <div className="item-card">
            <img src="/product3.png" alt="Product" />
            <p>Sweat Pants</p>
            <p className="price">₱500</p>
          </div>

          {}
          <div className="item-card">
            <img src="/product4.png" alt="Product" />
            <p>Sweat Shirt</p>
            <p className="price">₱650</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;