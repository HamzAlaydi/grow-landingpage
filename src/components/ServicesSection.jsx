// components/ServicesSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt, FaBrain, FaRocket, FaDatabase } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="service-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
      }}
    >
      <div className="service-icon">
        {icon}
        <div className="icon-background"></div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    { icon: <FaCode />, title: 'Custom Software Development', description: 'Tailored solutions designed to meet your specific business requirements and challenges.' },
    { icon: <FaLaptopCode />, title: 'Web Application Development', description: 'Modern, responsive web applications built with cutting-edge technologies.' },
    { icon: <FaMobileAlt />, title: 'Mobile App Development', description: 'Native and cross-platform mobile applications for iOS and Android.' },
    { icon: <FaDatabase />, title: 'Database Solutions', description: 'Efficient database design, optimization, and management for your data needs.' },
    { icon: <FaBrain />, title: 'IT Consulting', description: 'Expert advice on technology selection, architecture, and implementation strategies.' },
    { icon: <FaRocket />, title: 'Digital Transformation', description: 'Guide your business through digital evolution with strategic technology adoption.' }
  ];

  const techStack = [
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Angular", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
    { name: "Vue.js", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
    { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div
          ref={sectionRef}
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Services</h2>
          <p>Comprehensive software solutions to power your business growth</p>
          <div className="heading-underline"></div>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>

      <div className="tech-stack">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Technologies We Use
        </motion.h3>
        <motion.div 
          className="tech-logos"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {techStack.map((tech, index) => (
            <motion.div 
              key={index} 
              className="tech-logo"
              whileHover={{ y: -10 }}
            >
              <img src={tech.logo} alt={tech.name} width="80" height="80" />
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
