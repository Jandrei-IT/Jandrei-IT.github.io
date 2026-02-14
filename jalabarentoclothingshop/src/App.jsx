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
import Confirm from './pages/Confirm';
import Receipt from './pages/Receipt';
import User from './pages/User';
import './App.css';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        {}
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
