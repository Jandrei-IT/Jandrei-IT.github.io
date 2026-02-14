import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import { Link, useNavigate } from "react-router-dom";
import './Signup.css';


const Signup = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirm: '',
    mobile: '',
    address: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, email, password, confirm, mobile, address } = formData;
    if (!fname.trim() || !lname.trim() || !email.trim() || !password.trim() || !confirm.trim() || !mobile.trim() || !address.trim()) {
      alert("All fields are required.");
      return;
    }
    if (!email.includes("@")) {
      alert("Enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      alert("Password and Confirm Password must match.");
      return;
    }
    if (!/^\d+$/.test(mobile)) {
      alert("Mobile number must contain digits only.");
      return;
    }
    navigate('/login');
  };

  return (
    <>
      <Header />
      <div className="signup-page-container">
        <div className="content-wrapper">
          <Sidebar isLoggedIn={false} />
          <main className="main-content">
            <h2 className="signup-heading">Sign Up</h2>
            <form id="signupForm" className="form-card" onSubmit={handleSubmit}>
              <label htmlFor="fname">First Name:</label><br />
              <input
                type="text"
                id="fname"
                placeholder="First name"
                value={formData.fname}
                onChange={handleChange}
                required
              /><br /><br />

              <label htmlFor="lname">Last Name:</label><br />
              <input
                type="text"
                id="lname"
                placeholder="Last name"
                value={formData.lname}
                onChange={handleChange}
                required
              /><br /><br />

              <label htmlFor="email">Email Address:</label><br />
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              /><br /><br />

              <label htmlFor="password">Password:</label><br />
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              /><br /><br />

              <label htmlFor="confirm">Confirm Password:</label><br />
              <input
                type="password"
                id="confirm"
                placeholder="Confirm password"
                value={formData.confirm}
                onChange={handleChange}
                required
              /><br /><br />

              <label htmlFor="mobile">Mobile Number:</label><br />
              <input
                type="tel"
                id="mobile"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              /><br /><br />

              <label htmlFor="address">Home Address:</label><br />
              <textarea
                id="address"
                placeholder="Enter home address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea><br /><br />

              <button type="submit">Sign Up</button>
              <p>
          Don't have an account?{' '}
          <Link to="/login" className="submit">Log In</Link>
        </p>
            </form>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
