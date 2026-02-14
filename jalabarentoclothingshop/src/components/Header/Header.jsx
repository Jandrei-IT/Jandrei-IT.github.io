import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/logo.png" alt="Jalabarento Logo" className="logo-img" />
          <a href="/">Feat Clothing</a>
        </div>
      </div>
    </header>
  );
};

export default Header;