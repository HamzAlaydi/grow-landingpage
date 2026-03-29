import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt, FaBrain, FaRocket, FaDatabase } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-glass rounded-xl p-6 relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Top gradient line on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-pink-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
      
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-green-500/20 flex items-center justify-center text-blue-400 text-xl mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-200 mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    { icon: <FaCode />, title: 'Custom Software Development', description: 'Tailored solutions designed to meet your specific business requirements and challenges.' },
    { icon: <FaLaptopCode />, title: 'Web Application Development', description: 'Modern, responsive web applications built with cutting-edge technologies like React, Next.js & Angular.' },
    { icon: <FaMobileAlt />, title: 'Mobile App Development', description: 'Native and cross-platform mobile applications for iOS and Android using React Native & Flutter.' },
    { icon: <FaDatabase />, title: 'Database Solutions', description: 'Efficient database design, optimization, and management using PostgreSQL, MongoDB & Redis.' },
    { icon: <FaBrain />, title: 'AI Integration', description: 'Enterprise AI solutions using OpenAI & Gemini APIs — intelligent dashboards, chatbots & workflow automation.' },
    { icon: <FaRocket />, title: 'Digital Transformation', description: 'Guide your business through digital evolution with strategic technology adoption and modern architecture.' }
  ];

  const techStack = [
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Next.js", logo: "https://img.icons8.com/fluency/96/nextjs.png" },
    { name: "Vue.js", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
    { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Docker", logo: "https://img.icons8.com/fluency/96/docker.png" },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient inline-block mb-3">Our Services</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Comprehensive software solutions to power your business growth</p>
          <div className="gradient-underline mx-auto mt-4"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} delay={0.1 + index * 0.1} />
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-20 pt-16 border-t border-white/5">
        <motion.h3
          className="text-sm uppercase tracking-widest text-slate-500 text-center mb-8 font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Technologies We Use
        </motion.h3>
        <motion.div
          className="flex justify-center gap-8 sm:gap-12 flex-wrap px-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {techStack.map((tech, index) => (
            <motion.div key={index} className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all" whileHover={{ y: -8 }}>
              <img src={tech.logo} alt={tech.name} className="w-12 h-12 sm:w-14 sm:h-14 object-contain grayscale brightness-150 hover:grayscale-0 hover:brightness-100 transition-all" />
              <span className="text-xs text-slate-500 tracking-wider">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
