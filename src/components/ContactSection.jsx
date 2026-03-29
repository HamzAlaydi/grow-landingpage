import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    { icon: <FaEnvelope className="text-blue-400" />, title: 'Email Us', info: 'hamza.alaydi.99@outlook.sa', link: 'mailto:hamza.alaydi.99@outlook.sa' },
    { icon: <FaPhone className="text-blue-400" />, title: 'Call Us', info: '+201044381820', link: 'tel:+201044381820' },
    { icon: <FaWhatsapp className="text-green-400" />, title: 'WhatsApp', info: '+201044381820', link: 'https://wa.me/201044381820' },
    { icon: <FaMapMarkerAlt className="text-red-400" />, title: 'Visit Us', info: 'Turkey, Maslak şubesi', link: '#' },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient inline-block mb-3">Get In Touch</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Let's discuss how we can help your business grow</p>
          <div className="gradient-underline mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-200 mb-4">Contact Information</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Reach out to us through any of the following channels or fill out the form, and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-5 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">{item.title}</h4>
                    <span className="text-slate-400 text-sm group-hover:text-blue-400 transition-colors">{item.info}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h4 className="text-sm font-semibold text-slate-200 mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: "fab fa-whatsapp", href: "https://wa.me/201044381820" },
                  { icon: "fab fa-github", href: "https://github.com/HamzAlaydi" },
                  { icon: "fab fa-linkedin-in", href: "https://linkedin.com" },
                  { icon: "fas fa-globe", href: "https://reevez.com" },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition-all">
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-200 mb-6">Send Us a Message</h3>
              
              {formStatus.submitted && (
                <motion.div
                  className={`p-4 rounded-lg mb-6 text-sm font-medium ${
                    formStatus.success 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                      : 'bg-red-500/10 text-red-400 border border-red-500/30'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formStatus.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: 'Your Name *', name: 'name', type: 'text', required: true },
                  { label: 'Your Email *', name: 'email', type: 'email', required: true },
                  { label: 'Subject', name: 'subject', type: 'text', required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-colors resize-none"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all min-h-[44px]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;