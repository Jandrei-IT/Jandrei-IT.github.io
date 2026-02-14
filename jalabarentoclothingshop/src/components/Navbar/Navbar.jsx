import React from "react";
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#top">Top</a></li>
        <li><a href="#bottom">Bottom</a></li>
        <li><a href="#cap">Cap</a></li>
        <li><a href="#others">Others</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
