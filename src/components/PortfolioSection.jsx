import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import eCommercePhoto from "../assets/images/1.png";
import AdaaPhoto from "../assets/images/2.png";
import AnmatPhoto from "../assets/images/3.png";
import MMSPhoto from "../assets/images/4.png";
import Watford from "../assets/images/5.png";

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      image: eCommercePhoto,
      description:
        "Full-featured e-commerce solution with inventory management, payment processing, and analytics.",
      link: "https://happy-shpo.vercel.app/",
    },
    {
      id: 2,
      title: "Adaa Dashboard",
      category: "enterprise",
      image: AdaaPhoto,
      description:
        "Integrated system for patient records, scheduling, and billing for healthcare providers.",
      link: "https://www.realsoft-me.com/adaa/",
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      category: "mobile",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/70/65/7f/70657fa4-b039-bac6-e822-7deaa741e870/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/230x0w.webp",
      description:
        "Cross-platform mobile application for tracking workouts, nutrition, and health metrics.",
      link: "https://apps.apple.com/us/app/planfit-gym-fitness-planner/id1511876936",
    },
    {
      id: 4,
      title: "Employee Management System",
      category: "enterprise",
      image: AnmatPhoto,
      description:
        "Property listing, management, and analytics platform for real estate agencies.",
      link: "#",
    },
    {
      id: 5,
      title: "Maintenance Management System",
      category: "enterprise",
      image: MMSPhoto,
      description:
        "Comprehensive inventory tracking and management solution for manufacturing businesses.",
      link: "https://mms.stephanosbakedgoods.com/",
    },
    {
      id: 6,
      title: "Watford Tutoring Academy animation",
      category: "web",
      image: Watford,
      description:
        "Providing exceptional tutoring services in English, Maths, and Science with a team of experienced educators",
      link: "http://watford-tutoring-aca.s3-website.eu-west-2.amazonaws.com/",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Applications" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "enterprise", label: "Enterprise Solutions" },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <motion.div
          ref={sectionRef}
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Portfolio</h2>
          <p>Discover our recent projects and success stories</p>
          <div className="heading-underline"></div>
        </motion.div>

        <motion.div
          className="portfolio-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div className="tab-underline" layoutId="tabUnderline" />
              )}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="portfolio-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-item"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <img
                className="portfolio-image"
                src={project.image}
                alt={project.title}
              />
              <div className="portfolio-overlay">
                <h3>{project.title}</h3>
                <p className="category">
                  {project.category === "web"
                    ? "Web Application"
                    : project.category === "mobile"
                    ? "Mobile App"
                    : "Enterprise Solution"}
                </p>
                <p className="description">{project.description}</p>
                <div className="portfolio-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="cta-container"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#contact" className="btn primary">
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
