import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUsers, FaGlobeAmericas, FaProjectDiagram, FaBriefcase, FaRocket } from 'react-icons/fa';

const AnimatedCounter = ({ end, suffix = '', duration = 2000, isInView }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let startTime;
    let animationFrame;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);
  return <span>{count.toLocaleString()}{suffix}</span>;
};

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { icon: <FaUsers />, value: 2000000, suffix: '+', label: 'Active Users', color: 'text-blue-400' },
    { icon: <FaGlobeAmericas />, value: 58, suffix: '+', label: 'Countries Served', color: 'text-red-400' },
    { icon: <FaProjectDiagram />, value: 15, suffix: '+', label: 'Projects Delivered', color: 'text-yellow-400' },
    { icon: <FaBriefcase />, value: 5, suffix: '+', label: 'Years in Business', color: 'text-green-400' },
  ];

  const capabilities = [
    {
      title: 'AI-Powered Enterprise Solutions',
      description: 'We design and build AI SaaS platforms that embed intelligent assistants into enterprise dashboards — driving automation across HR, analytics, factories, and admin workflows.',
    },
    {
      title: 'Fintech & Loyalty Platforms',
      description: 'Our team has engineered digital loyalty and payment platforms serving 2M+ users across 58 countries, trusted by brands like Starbucks, Costa Coffee, and Allpress.',
    },
    {
      title: 'Scalable Web & Mobile Applications',
      description: 'From cross-platform mobile apps to full-stack web platforms, we deliver production-grade software with modern stacks — React, Next.js, Node.js, NestJS, and more.',
    },
    {
      title: 'IoT & Industrial Systems',
      description: 'We build real-time monitoring dashboards for smart agriculture, PLC systems, and industrial IoT — connecting hardware with intelligent software.',
    },
  ];

  const clientLogos = [
    { name: 'Allpress', src: 'https://magicstamp-new-portal-sa.parktechnology.com/assets/images/marque/allpress-logo.png' },
    { name: 'Canal', src: 'https://magicstamp-new-portal-sa.parktechnology.com/assets/images/marque/canal-logo.png' },
    { name: 'Buns', src: 'https://magicstamp-new-portal-sa.parktechnology.com/assets/images/marque/buns-logo.png' },
    { name: 'Kalve', src: 'https://magicstamp-new-portal-sa.parktechnology.com/assets/images/marque/kalve-logo.png' },
    { name: 'Perky Blenders', src: 'https://magicstamp-new-portal-sa.parktechnology.com/assets/images/marque/perky-logo.png' },
    { name: 'Espresso Lab', src: 'https://magicstamp-new-portal-sa.parktechnology.com/assets/images/marque/espresso-logo.png' },
    { name: 'Float', src: 'https://magicstamp-new-portal-sa.parktechnology.com/assets/images/marque/float-logo.png' },
    { name: 'Costa Coffee', src: 'https://magicstamp-new-portal-sa.parktechnology.com/assets/images/marque/costa-logo.png' },
    { name: 'Five Star Nails', src: 'https://magicstamp-new-portal-sa.parktechnology.com/assets/images/marque/nails-logo.png' },
    { name: 'Ozone', src: 'https://magicstamp-new-portal-sa.parktechnology.com/assets/images/marque/ozone-logo.png' },
    { name: 'Pars', src: 'https://magicstamp-new-portal-sa.parktechnology.com/assets/images/marque/pars-logo.png' },
  ];

  return (
    <section id="about" className="bg-dark-section py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient inline-block mb-3">About Our Company</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A software company building products that scale to millions — from fintech platforms to AI-powered enterprise tools.
          </p>
          <div className="gradient-underline mx-auto mt-4"></div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-glass rounded-2xl p-5 sm:p-6 text-center hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={`text-3xl mb-3 ${stat.color}`}>{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient-light mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Description */}
        <motion.div
          className="bg-glass rounded-2xl p-6 sm:p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <FaRocket /> Engineering Excellence
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gradient-light mb-4">Grow Software Solutions</h3>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-4">
            We are a software engineering company specializing in building <strong className="text-slate-200">high-impact, scalable products</strong> for 
            businesses across the globe. Our portfolio includes a <strong className="text-slate-200">digital loyalty platform serving 2M+ active users</strong> across 
            <strong className="text-slate-200"> 58 countries</strong>, trusted by enterprise clients like <strong className="text-slate-200">Starbucks</strong> and <strong className="text-slate-200">Costa Coffee</strong>.
          </p>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
            From <strong className="text-slate-200">AI-powered enterprise dashboards</strong> using OpenAI & Gemini APIs, to <strong className="text-slate-200">fintech platforms</strong> processing 
            millions of transactions, and <strong className="text-slate-200">IoT monitoring systems</strong> for smart agriculture — we deliver end-to-end solutions 
            that drive real business impact.
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'OpenAI', 'Gemini API', 'Docker', 'PostgreSQL', 'Angular', 'Vue.js', 'Python', 'React Native', 'Flutter'].map((tech, i) => (
              <span key={i} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-md text-sm font-medium hover:bg-blue-500/20 hover:-translate-y-0.5 transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              className="bg-glass rounded-xl p-5 sm:p-6 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h4 className="text-lg font-semibold text-slate-200 mb-3">{cap.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted By - Logo Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-center text-xs text-slate-500 font-semibold uppercase tracking-[0.2em] mb-8">
            Trusted by International Brands
          </h3>
          <div className="relative overflow-hidden py-6">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[rgba(10,25,47,1)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[rgba(10,25,47,1)] to-transparent z-10 pointer-events-none"></div>
            {/* Scrolling row */}
            <div className="flex animate-marquee gap-8 items-center">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={i} className="flex-shrink-0 px-4 py-3 bg-white/[0.07] rounded-xl border border-white/[0.08] hover:bg-white/[0.12] transition-all duration-300 flex items-center justify-center" style={{ minWidth: '160px', height: '70px' }}>
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 sm:h-10 w-auto object-contain invert brightness-200 opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
