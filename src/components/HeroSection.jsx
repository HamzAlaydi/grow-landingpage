import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const phrases = [
      'Scalable Software Products',
      'Fintech & Loyalty Platforms',
      'AI-Powered Dashboards',
      'Enterprise Solutions',
      'Mobile & Web Applications'
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
        typingSpeed = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % phrases.length;
        typingSpeed = 500;
      }
      setTimeout(type, typingSpeed);
    };
    setTimeout(type, 500);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          {/* Badge */}
          <motion.div
            className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold mb-6 bg-gradient-to-r from-blue-500/15 to-pink-500/15 border border-blue-500/30 text-blue-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            🚀 Products Serving 2M+ Active Users in 58+ Countries
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gradient leading-tight">
            Grow Software Solutions
          </h1>

          <h2 className="text-xl sm:text-2xl text-slate-300 mb-6 font-medium">
            <span className="text-slate-400">We Build </span>
            <span ref={textRef} className="text-blue-400 font-bold"></span>
            <span className="inline-block w-0.5 h-7 bg-blue-400 ml-1 animate-blink align-middle"></span>
          </h2>

          <motion.p
            className="text-slate-400 text-base sm:text-lg mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We engineer production-grade software — from fintech platforms processing millions of transactions 
            to AI-powered enterprise dashboards. Our products scale across 58+ countries, trusted by brands 
            like Starbucks & Costa Coffee.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#portfolio" className="px-7 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all text-center min-h-[44px] flex items-center justify-center">
              View Our Work
            </a>
            <a href="#contact" className="px-7 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:-translate-y-0.5 transition-all text-center min-h-[44px] flex items-center justify-center">
              Get In Touch
            </a>
            <a
              href="https://wa.me/201044381820"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 min-h-[44px]"
            >
              <i className="fab fa-whatsapp text-lg"></i> WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Visual Side */}
        <motion.div
          className="md:w-[45%] relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-full h-[320px] sm:h-[400px]">
            <motion.div className="absolute top-[10%] left-[20%] text-5xl text-blue-400/70" animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
              &lt;/&gt;
            </motion.div>
            <motion.div className="absolute top-[30%] right-[25%] text-5xl text-blue-400/70" animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
              {'{'}
            </motion.div>
            <motion.div className="absolute bottom-[15%] left-[35%] text-5xl text-blue-400/70" animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 3.5 }}>
              {'}'}
            </motion.div>
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80" viewBox="0 0 200 200">
              <motion.circle cx="100" cy="100" r="80" fill="none" stroke="#4a8cff" strokeWidth="1" strokeDasharray="5,5" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} />
              <motion.circle cx="100" cy="20" r="5" fill="#4a8cff" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} style={{ transformOrigin: "100px 100px" }} />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white text-sm"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto mb-2 relative">
          <div className="w-1 h-2 bg-white/80 absolute top-2 left-1/2 -translate-x-1/2 rounded-full animate-scroll-wheel"></div>
        </div>
        <p className="text-slate-400">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;