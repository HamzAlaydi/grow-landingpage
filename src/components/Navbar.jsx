import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = ({ scrollY }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "portfolio", "contact"];

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`navbar ${scrollY > 50 ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="hero" smooth={true} duration={600} offset={-80}>
            <h2>
              Grow<span>Software</span>
            </h2>
          </Link>
        </motion.div>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className={activeSection === item.id ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="nav-indicator"
                      layoutId="navIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="btn primary"
          >
            Get Started
          </Link>
        </motion.div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "active" : ""}`}></div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
