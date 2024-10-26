


import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <a href="#home" className="logo">Profile</a>

      {/* Hamburger Menu */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#portfolio" className="nav-link">Portfolio</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
