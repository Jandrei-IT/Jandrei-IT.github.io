
import React from "react";
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import "./User.css";

const UserProfile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/');
  };

  return (
    <div className="user-page">
      <Header />
      <div className="user-content-wrapper">
        <Sidebar />
        <main className="user-main-content">
          <div className="user-card">
            <h2 className="user-heading">User Profile</h2>
            <img src="user.png" alt="User Profile Pic" className="user-profile-img" />
            <p>First Name: Juan</p>
            <p>Last Name: Dela Cruz</p>
            <p>Email Address: juandelacruz@example.com</p>
            <p>Mobile Number: +1234567890</p>
            <p>Home Address: 123 Placeholder Street, City</p>
            <button className="logout-btn" style={{ marginTop: '20px', display: 'inline-block' }} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
