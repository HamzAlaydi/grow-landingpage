
// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">
                <h2>Grow<span>Software</span></h2>
              </div>
              <p>Empowering businesses with innovative software solutions and expert consulting services to drive growth and digital transformation.</p>
              <div className="footer-social">
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3>Services</h3>
                <ul>
                  <li><a href="#services">Web Development</a></li>
                  <li><a href="#services">Mobile Apps</a></li>
                  <li><a href="#services">IT Consulting</a></li>
                  <li><a href="#services">Digital Transformation</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3>Contact Us</h3>
                <ul className="contact-list">
                  <li>
                    <FaEnvelope />
                    <a href="mailto:hamza.alaydi.99@outlook.sa">hamza.alaydi.99@outlook.sa</a>
                  </li>
                  <li>
                    <FaPhone />
                    <a href="tel:+201044381829">+201044381829</a>
                  </li>
                  <li>
                    <FaMapMarkerAlt />
                    <span>Turkey, Maslak şubesi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <p>&copy; {currentYear} Grow Software Solutions. All Rights Reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className="footer-shapes">
        <motion.div 
          className="shape shape-1"
          animate={{ 
            y: [0, -15, 0], 
            rotate: [0, 10, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6
          }}
        ></motion.div>
        <motion.div 
          className="shape shape-2"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 7
          }}
        ></motion.div>
      </div>
    </footer>
  );
};

export default Footer;