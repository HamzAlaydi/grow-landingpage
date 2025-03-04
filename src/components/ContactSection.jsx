import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitted: true, success: false, message: 'Please fill out all required fields.' });
      return;
    }
    
    emailjs.send('service_2xdhuaa', 'template_r9sc4r8', {
      to_name: 'Grow Company Team',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    }, '8_U_jnqZ9hjg825Om')
    .then(() => {
      setFormStatus({ submitted: true, success: true, message: 'Thank you! Your message has been sent.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch(() => {
      setFormStatus({ submitted: true, success: false, message: 'Failed to send message. Please try again.' });
    });
  };
  
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      info: 'hamza.alaydi.99@outlook.sa',
      link: 'hamza.alaydi.99@outlook.sa'
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      info: '+201044381820',
      link: 'tel:+201044381820'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      info: 'Turkey, Maslak şubesi',
      link: '#'
    }
  ];
  
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          ref={sectionRef}
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>Let's discuss how we can help your business grow</p>
          <div className="heading-underline"></div>
        </motion.div>
        
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Contact Information</h3>
            <p>Reach out to us through any of the following channels or fill out the form, and we'll get back to you as soon as possible.</p>
            
            <div className="info-items">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="icon">
                    {item.icon}
                  </div>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <a href={item.link}>{item.info}</a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h4>Follow Us</h4>
              <div className="links">
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
            </motion.div>
          </motion.div>
          
          <motion.div className="contact-form-container" initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <div className="form-wrapper">
            <h3>Send Us a Message</h3>
            {formStatus.submitted && (
              <motion.div className={`form-message ${formStatus.success ? 'success' : 'error'}`} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                {formStatus.message}
              </motion.div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Your Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Your Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <motion.button type="submit" className="btn primary submit-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
        </div>
      </div>
      
      <div className="contact-shapes">
        <motion.div 
          className="shape shape-1"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="shape shape-2"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default ContactSection;