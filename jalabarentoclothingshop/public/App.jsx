import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../src/components/ScrollToTop';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Products from '../src/pages/Products';
import Cart from '../src/pages/Cart';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Confirm from '../src/pages/Confirm';
import Receipt from '../src/pages/Receipt';
import User from '../src/pages/User';
import './App.css';
function App() {
  return (
    <Router basename="/jalabarentoclothingshop">
      <ScrollToTop />
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/Receipt" element={<Receipt />} />
            <Route path="/User" element={<User />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
