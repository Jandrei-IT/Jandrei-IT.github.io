import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/User';
import Confirm from './pages/Confirm';
import Receipt from './pages/Receipt';
import './App.css';

function App() {
  return (
    <Router basename="/jalabarentoclothingshop">
      <ScrollToTop />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/User" element={<UserProfile />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
