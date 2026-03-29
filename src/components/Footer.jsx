import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#services" },
        { label: "Mobile Apps", href: "#services" },
        { label: "AI Integration", href: "#services" },
        { label: "Digital Transformation", href: "#services" },
      ],
    },
    {
      title: "Featured Projects",
      links: [
        { label: "Reevez AI", href: "https://reevez.com", external: true },
        { label: "MagicStamp", href: "https://magicstamp-new-portal-sa.parktechnology.com/", external: true },
        { label: "Smart Irrigation", href: "https://poc-plc-software.vercel.app/irrigation", external: true },
        { label: "Barcode Verifier", href: "https://github.com/HamzAlaydi/production_line_barcode_verifier.git", external: true },
      ],
    },
  ];

  return (
    <footer className="bg-darker pt-16 pb-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Grow</span><span className="text-white">Software</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Empowering businesses with innovative software solutions and expert consulting services to drive growth and digital transformation.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "fab fa-whatsapp", href: "https://wa.me/201044381820" },
                { icon: "fab fa-github", href: "https://github.com/HamzAlaydi" },
                { icon: "fab fa-linkedin-in", href: "https://linkedin.com" },
                { icon: "fas fa-globe", href: "https://reevez.com" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-slate-400 text-sm hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition-all" aria-label={s.icon.split(' ').pop()}>
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 relative inline-block">
                {section.title}
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500"></span>
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-slate-400 text-sm hover:text-blue-400 hover:translate-x-1 transition-all inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Row */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-sm text-slate-400">
            <a href="mailto:hamza.alaydi.99@outlook.sa" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <FaEnvelope className="text-blue-400" /> hamza.alaydi.99@outlook.sa
            </a>
            <a href="tel:+201044381820" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <FaPhone className="text-blue-400" /> +201044381820
            </a>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" /> Turkey, Maslak şubesi
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Grow Software Solutions. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;