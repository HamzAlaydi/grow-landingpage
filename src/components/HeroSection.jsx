// components/HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const phrases = [
      'Building Software',
      'Solving Problems',
      'Enabling Growth',
      'Creating Solutions'
    ];

    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentPhrase = phrases[currentIndex];
      
      if (isDeleting) {
        textElement.innerText = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        textElement.innerText = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500; // Wait before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % phrases.length;
        typingSpeed = 500; // Wait before typing next phrase
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 500);
  }, []);

  return (
    <section id="hero" className="container hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1>
            Grow Software <span className="highlight">Solutions</span>
          </h1>
          <h2>
            <span className="prefix">We Specialize in </span>
            <span ref={textRef} className="animated-text"></span>
            <span className="cursor">|</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Empowering businesses with custom software solutions and expert consulting services to accelerate growth and innovation.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#services" className="btn primary">Our Services</a>
            <a href="#contact" className="btn secondary">Contact Us</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="floating-elements">
            <motion.div
              className="float-1"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              &lt;/&gt;
            </motion.div>
            <motion.div
              className="float-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              {'{'}
            </motion.div>
            <motion.div
              className="float-3"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
            >
              {'}'}
            </motion.div>
            <svg className="svg-orbit" viewBox="0 0 200 200">
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#4a8cff"
                strokeWidth="1"
                strokeDasharray="5,5"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              />
              <motion.circle
                cx="100"
                cy="20"
                r="5"
                fill="#4a8cff"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                style={{ transformOrigin: "100px 100px" }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-down"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;