import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import eCommercePhoto from "../assets/images/1.png";
import AdaaPhoto from "../assets/images/2.png";
import AnmatPhoto from "../assets/images/3.png";
import MMSPhoto from "../assets/images/4.png";
import Watford from "../assets/images/5.png";
import Ayzeen from "../assets/images/6.png";
import Academic from "../assets/images/7.png";
import IrrigationPhoto from "../assets/images/irrigation.png";
import FarmVisualizationPhoto from "../assets/images/farm-visulatuin.png";

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
    {
      id: 7,
      title: "Ayzeen",
      category: "mobile",
      image: Ayzeen,
      description: "Online delivery and shopping application",
      link: "https://apps.apple.com/il/app/ayzeen-%D8%B9%D8%A7%D9%8A%D8%B2%D9%8A%D9%86/id1571568949",
    },
    {
      id: 8,
      title: "Academic Potential",
      category: "web",
      image: Academic,
      description: "Unlock Your Academic Potential, with our expert tutors.",
      link: "http://watford-tutoring-aca1.s3-website.eu-west-2.amazonaws.com/",
    },
    {
      id: 9,
      title: "Smart Irrigation System",
      category: "iot",
      image: IrrigationPhoto,
      description:
        "Real-time PLC monitoring system for smart irrigation with weather stations, soil sensors, and automated valve control.",
      link: "https://poc-plc-software.vercel.app/irrigation",
    },
    {
      id: 10,
      title: "Farm Visualization Dashboard",
      category: "iot",
      image: FarmVisualizationPhoto,
      description:
        "Interactive farm visualization system showing pump status, valve controls, and sensor data across 300-acre smart farm.",
      link: "https://poc-plc-software.vercel.app/farm-visualization",
    },
    {
      id: 11,
      title: "PalmTech CMS",
      category: "cms",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      description:
        "Comprehensive content management system with modern interface and powerful admin capabilities.",
      link: "https://palmtect-website-front.vercel.app/",
    },
    {
      id: 12,
      title: "MK-CMS",
      category: "cms",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      description:
        "Advanced content management system with intuitive dashboard and flexible content organization.",
      link: "https://mk-cms.vercel.app/",
    },
    {
      id: 13,
      title: "Production Line Barcode Verifier",
      category: "vision",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
      description:
        "Computer vision system for automated barcode verification in production lines using advanced image processing.",
      link: "https://github.com/HamzAlaydi/production_line_barcode_verifier.git",
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
    { id: "iot", label: "IoT & PLC" },
    { id: "cms", label: "CMS" },
    { id: "vision", label: "Computer Vision" },
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
                    : project.category === "enterprise"
                    ? "Enterprise Solution"
                    : project.category === "iot"
                    ? "IoT & PLC"
                    : project.category === "cms"
                    ? "CMS"
                    : project.category === "vision"
                    ? "Computer Vision"
                    : "Other"}
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
