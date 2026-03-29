import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = ({ scrollY }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "portfolio", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          scrollY > 50
            ? "bg-[#0a192f]/90 backdrop-blur-lg py-4 shadow-lg"
            : "py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="hero" smooth={true} duration={600} offset={-80} className="cursor-pointer">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Grow<span className="text-blue-400">Software</span>
              </h2>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className={`text-base font-medium cursor-pointer relative py-1 transition-colors duration-200 ${
                      activeSection === item.id ? "text-blue-400" : "text-white hover:text-blue-400"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                        layoutId="navIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <motion.div className="hidden lg:block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-sm transition-all cursor-pointer"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Hamburger */}
          <div
            className="lg:hidden cursor-pointer w-7 h-5 relative z-[1200]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`absolute left-0 w-full h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}></span>
            <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : "opacity-100"}`}></span>
            <span className={`absolute left-0 w-full h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}></span>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu - rendered as portal outside nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[1150] bg-[#0a192f]/98 backdrop-blur-xl flex flex-col justify-center items-center lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close X Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white z-[1200]"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>
            <ul className="flex flex-col gap-8 text-center">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                >
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className={`text-2xl font-semibold cursor-pointer transition-colors duration-200 ${
                      activeSection === item.id ? "text-blue-400" : "text-white hover:text-blue-400"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all cursor-pointer inline-block"
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
