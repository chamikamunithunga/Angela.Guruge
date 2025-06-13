import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        setVisible(rect.bottom <= 0); // when home is scrolled out
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    setDropdownOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${visible ? 'show-navbar' : 'hide-navbar'}`}>
      <div className="logo">ANGELA GURUGE</div>

      <div
        className="mobile-menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About Us</a></li>
        <li><a href="#gallery" onClick={(e) => handleLinkClick(e, 'gallery')}>Image Gallery</a></li>
        <li
          className={`dropdown ${dropdownOpen ? 'open' : ''}`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
        </li>
        <li><a href="#albatraoz" onClick={(e) => handleLinkClick(e, 'albatraoz')}>Albatraoz</a></li>
        <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
