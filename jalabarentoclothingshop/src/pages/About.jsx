import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import './About.css';

const About = () => {
  const isLoggedIn = true;

  return (
    <div className="about-page-container">
      <Header />
      
      <div className="content-wrapper">
        <Sidebar isLoggedIn={isLoggedIn} />
        
        <main className="main-content">
          <div className="about-card">
            <section className="about-line">
              <h2>About Our Clothing Line</h2>
              <p>
                Our clothing line is designed for streetwear. The word <strong>Feat</strong> means 
                “an act or product of skill, endurance, or ingenuity.” We aim to serve you the best 
                and help you fit perfectly into the streetwear culture.
              </p>
            </section>
          </div>

          <div className="about-card">
            <section className="about-owner">
              <h2>About the Owner</h2>
              <img 
                src="/prom pic.png" 
                alt="Portrait of Jandrei Labarento" 
                className="profile-pic" 
              />
              <p>
                I am <strong>Jandrei Labarento</strong>, an IT student passionate about technology 
                and entrepreneurship. I aspire to create graphic T-shirts that contribute positively 
                to society. I want to establish a brand that will be recognized worldwide in the clothing 
                brand industry. Through this website, I can show my skills in web development and making 
                graphic T-shirts.
              </p>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default About;