// App.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt, FaBrain, FaRocket } from 'react-icons/fa';
import './App.css';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1.5 }}
          className="loading-logo"
        >
          <h1>Grow</h1>
          <motion.div
            className="loading-bar"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app">
      <ParticlesBackground />
      <Navbar scrollY={scrollY} />
      
      <AnimatePresence>
        <main>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <ContactSection />
        </main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default App;