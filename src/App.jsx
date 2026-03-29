// App.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import WhatsAppButton from './components/WhatsAppButton';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="text-gradient">Grow</span>
          </h1>
          <motion.div
            className="loading-bar h-1 mx-auto rounded-full"
            style={{ maxWidth: '200px' }}
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
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
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <ContactSection />
        </main>
      </AnimatePresence>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;