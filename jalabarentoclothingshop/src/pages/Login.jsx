import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import './Login.css'; 
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = formData.email.trim();
    const password = formData.password.trim();

    if (!email || !email.includes("@")) {
      alert("Enter a valid email.");
      return;
    }

    if (!password || password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    navigate('/User');
  };

  return (
    <div className="login-page-container">
      <Header />
      <div className="content-wrapper">
        <Sidebar isLoggedIn={false} />
        <main className="main-content">
      <h2 className="login-heading">Log In</h2>
      <form id="loginForm" className="form-card" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="password">Password:</label><br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Log In</button>

        <p>
          Already have an account?{' '}
          <Link to="/signup" className="submit">Sign Up</Link>
        </p>
      </form>
    </main>
      </div>
      <Footer />
    </div>
  );
};

export default Login;