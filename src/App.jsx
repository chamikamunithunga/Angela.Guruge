import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import EaringsBusiness from './components/EaringsBusiness';
import SpecialGallery from './components/SpecialGallery';
import ContactUs from './components/ContactUs';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <SpecialGallery />
      <EaringsBusiness />
      <ContactUs />

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default App;
