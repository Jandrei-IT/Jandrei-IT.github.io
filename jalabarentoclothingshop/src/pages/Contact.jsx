import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const message = formData.message.trim();
    if (!name || !message) {
      alert("Please fill out both fields.");
      return;
    }
    alert(`Name: ${name}\nMessage: ${message}`);
    setFormData({ name: '', message: '' });
  };

  const isLoggedIn = true;

  return (
    <div className="contact-page-container">
      <Header />

      <div className="content-wrapper">
        <Sidebar isLoggedIn={isLoggedIn} />

        <main className="main-content">
          
          <section className="contact-us">
            <h2 className="contact-heading">Contact Us</h2>
            <form 
              id="contactForm" 
              className="form-card user-form" 
              onSubmit={handleSubmit}
            >
              <label htmlFor="name">Name:</label><br />
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              /><br /><br />

              <label htmlFor="message">Message:</label><br />
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Enter Message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea><br /><br />

              <button className="button"  type="submit">Submit</button>
            </form>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
