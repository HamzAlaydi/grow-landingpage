import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGooglePlay, FaAppStoreIos, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
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
      title: "Reevez — AI Dashboard Platform",
      category: "ai",
      featured: true,
      logo: "https://res.cloudinary.com/die6tqher/image/upload/v1764373720/reevez-public/images/logos/logo.svg",
      logoBg: "bg-white",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      description: "An AI SaaS platform that embeds intelligent assistants directly into enterprise dashboards. Supports decision-making across factories, HR, analytics, and admin workflows with role-based AI access, usage limits, and token-based controls. Built for scalable, secure enterprise usage with workflow automation triggered by user actions. Developed with a team of 4 co-founders.",
      techStack: "Next.js · TypeScript · NestJS · OpenAI · Gemini API · Docker",
      links: [
        { label: "Visit Website", url: "https://reevez.com/", icon: <FaExternalLinkAlt /> },
      ],
    },
    {
      id: 2,
      title: "MagicStamp — Digital Loyalty Platform",
      category: "fintech",
      featured: true,
      logo: "https://play-lh.googleusercontent.com/K7V7MHKdxhbdQ-H2WzWKu9Ak96R2LVvD5Xh6HhTbVWkzHuBY0e_yfAJehCBQ1_Mt9ZY=w240-h480-rw",
      logoBg: "bg-white",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "A digital loyalty and rewards platform serving over 2 million active users across 58 international countries. Enterprise clients include Starbucks, Costa Coffee, Allpress, and leading F&B brands globally. Features scalable payment processing, customer rewards tracking, and a comprehensive merchant portal for campaign management and analytics.",
      techStack: "React · Node.js · PostgreSQL · Payment APIs",
      links: [
        { label: "Merchant Portal", url: "https://magicstamp-new-portal-sa.parktechnology.com/en", icon: <FaExternalLinkAlt /> },
        { label: "Google Play", url: "https://play.google.com/store/search?q=magicstamp&c=apps&hl=en_US", icon: <FaGooglePlay /> },
        { label: "App Store", url: "https://apps.apple.com/gb/app/magic-stamp/id1419555996", icon: <FaAppStoreIos /> },
      ],
    },
    {
      id: 3,
      title: "Scandrum — Barcode Scanner App",
      category: "mobile",
      featured: true,
      logo: "https://play-lh.googleusercontent.com/oS53qF3-t95Uji_bH8Wv_c8dD2bdzyK7g5JncMTM54KOMlWKlOgJgeeHznKG4fV3rlcvF7ASaP3L3BQf3_4oXw=w240-h480-rw",
      logoBg: "bg-white",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
      description: "A professional barcode and QR code scanning application available on Google Play. Features fast and accurate scanning, history tracking, batch scanning capabilities, and seamless integration with inventory management systems. Built for speed and reliability in retail and warehouse environments.",
      techStack: "React Native · Camera APIs · Barcode Libraries",
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.scandrum.scanner&hl=en_US", icon: <FaGooglePlay /> },
      ],
    },
    {
      id: 4,
      title: "WizJobs — AI Job Platform",
      category: "ai",
      featured: true,
      logo: null,
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      description: "An AI-powered job matching and recruitment platform that connects employers with talent using intelligent matching algorithms. Features smart resume parsing, automated candidate ranking, interview scheduling, and analytics dashboards for hiring teams. Streamlines the entire recruitment pipeline from job posting to offer management.",
      techStack: "React · Node.js · AI Matching · AWS Amplify",
      links: [
        { label: "Visit Platform", url: "https://development.d33skpg5egwbg6.amplifyapp.com/", icon: <FaExternalLinkAlt /> },
      ],
    },
    {
      id: 5,
      title: "Stephanos — Maintenance Management",
      category: "enterprise",
      featured: false,
      logo: "https://stephanosbakedgoods.com/wp-content/uploads/2020/10/sg-logo.png",
      logoBg: "bg-white",
      image: MMSPhoto,
      description: "A comprehensive asset and maintenance tracking solution for Stephanos Baked Goods manufacturing. Features preventive maintenance scheduling, work order management, spare parts inventory, equipment lifecycle tracking, and automated maintenance alerts to minimize downtime.",
      techStack: "React · Node.js · PostgreSQL · REST APIs",
      links: [
        { label: "View Live", url: "https://mms.stephanosbakedgoods.com/", icon: <FaExternalLinkAlt /> },
      ],
    },
    {
      id: 6,
      title: "E-commerce Platform",
      category: "web",
      image: eCommercePhoto,
      description: "Full-featured online shopping platform with inventory management, secure payment processing via Stripe, real-time order tracking, and comprehensive admin analytics dashboard. Built with responsive design for seamless mobile and desktop shopping experiences.",
      links: [{ label: "View Live", url: "https://happy-shpo.vercel.app/", icon: <FaExternalLinkAlt /> }],
    },
    {
      id: 7,
      title: "Adaa — Healthcare Dashboard",
      category: "enterprise",
      image: AdaaPhoto,
      description: "Enterprise healthcare management system integrating patient records, appointment scheduling, billing, and reporting. Features role-based access control, automated notifications, and real-time analytics for healthcare providers to streamline operations.",
      links: [{ label: "View Live", url: "https://www.realsoft-me.com/adaa/", icon: <FaExternalLinkAlt /> }],
    },
    {
      id: 8,
      title: "Fitness Tracking App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
      description: "Cross-platform mobile application for tracking workouts, nutrition plans, and health metrics. Features AI-powered workout suggestions, progress charts, social sharing, and integration with wearable devices for comprehensive fitness monitoring.",
      links: [{ label: "App Store", url: "https://apps.apple.com/us/app/planfit-gym-fitness-planner/id1511876936", icon: <FaAppStoreIos /> }],
    },
    {
      id: 9,
      title: "Employee Management System",
      category: "enterprise",
      image: AnmatPhoto,
      description: "Complete HR and employee management platform with attendance tracking, performance evaluations, payroll processing, leave management, and department hierarchy visualization. Includes automated reporting and export capabilities for enterprise teams.",
      links: [{ label: "View Details", url: "#contact", icon: <FaExternalLinkAlt /> }],
    },
    {
      id: 10,
      title: "Watford Tutoring Academy",
      category: "web",
      image: Watford,
      description: "Modern educational platform providing exceptional tutoring services in English, Maths, and Science. Features animated landing pages, course catalog, tutor profiles, student testimonials, and an online booking system for scheduling sessions.",
      links: [{ label: "View Live", url: "http://watford-tutoring-aca.s3-website.eu-west-2.amazonaws.com/", icon: <FaExternalLinkAlt /> }],
    },
    {
      id: 11,
      title: "Ayzeen — Delivery App",
      category: "mobile",
      image: Ayzeen,
      description: "Online delivery and e-commerce mobile application serving the Middle East market. Features real-time order tracking, multiple payment methods, restaurant and store listings, push notifications, and an intuitive user interface for seamless ordering.",
      links: [{ label: "App Store", url: "https://apps.apple.com/il/app/ayzeen-%D8%B9%D8%A7%D9%8A%D8%B2%D9%8A%D9%86/id1571568949", icon: <FaAppStoreIos /> }],
    },
    {
      id: 12,
      title: "Academic Potential",
      category: "web",
      image: Academic,
      description: "Educational platform designed to unlock students' academic potential through expert tutoring. Features course discovery, tutor matching, progress tracking, interactive learning resources, and parent portals for monitoring student achievement.",
      links: [{ label: "View Live", url: "http://watford-tutoring-aca1.s3-website.eu-west-2.amazonaws.com/", icon: <FaExternalLinkAlt /> }],
    },
    {
      id: 13,
      title: "Smart Irrigation System",
      category: "iot",
      image: IrrigationPhoto,
      description: "Real-time PLC monitoring system for smart irrigation featuring weather station integration, soil moisture sensors, automated valve control, water usage analytics, and alert systems. Manages irrigation across multiple zones with predictive scheduling.",
      links: [{ label: "View Live", url: "https://poc-plc-software.vercel.app/irrigation", icon: <FaExternalLinkAlt /> }],
    },
    {
      id: 14,
      title: "Farm Visualization Dashboard",
      category: "iot",
      image: FarmVisualizationPhoto,
      description: "Interactive farm visualization system displaying pump status, valve controls, sensor data, and equipment health across a 300-acre smart farm. Features real-time data streaming, interactive map overlays, and historical data analysis with full IoT integration.",
      links: [{ label: "View Live", url: "https://poc-plc-software.vercel.app/farm-visualization", icon: <FaExternalLinkAlt /> }],
    },
    {
      id: 15,
      title: "PalmTech CMS",
      category: "cms",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "Modern content management system with drag-and-drop page builder, media library, SEO optimization tools, multi-language support, and role-based admin capabilities. Built for agencies needing flexible content workflows and client management.",
      links: [{ label: "View Live", url: "https://palmtect-website-front.vercel.app/", icon: <FaExternalLinkAlt /> }],
    },
    {
      id: 16,
      title: "MK-CMS",
      category: "cms",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: "Advanced content management system featuring an intuitive dashboard, flexible content modeling, API-first architecture, version control, and real-time collaboration. Designed for teams managing complex multi-channel content strategies.",
      links: [{ label: "View Live", url: "https://mk-cms.vercel.app/", icon: <FaExternalLinkAlt /> }],
    },
    {
      id: 17,
      title: "Barcode Verifier — Computer Vision",
      category: "vision",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      description: "Computer vision system for automated barcode verification in production lines. Uses advanced image processing algorithms for real-time quality control, defect detection, batch tracking, and compliance reporting in manufacturing environments.",
      links: [{ label: "GitHub", url: "https://github.com/HamzAlaydi/production_line_barcode_verifier.git", icon: <FaGithub /> }],
    },
  ];

  const getCategoryLabel = (cat) => {
    const map = {
      web: "Web Application", mobile: "Mobile App", enterprise: "Enterprise",
      iot: "IoT & PLC", cms: "CMS", vision: "Computer Vision",
      fintech: "Fintech", ai: "AI / SaaS",
    };
    return map[cat] || "Other";
  };

  const filteredProjects = activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI / SaaS" },
    { id: "fintech", label: "Fintech" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "enterprise", label: "Enterprise" },
    { id: "iot", label: "IoT" },
    { id: "cms", label: "CMS" },
    { id: "vision", label: "Vision" },
  ];

  return (
    <section id="portfolio" className="bg-dark-section py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          ref={sectionRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient inline-block mb-3">Our Portfolio</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">From AI dashboards to fintech platforms — discover our success stories</p>
          <div className="gradient-underline mx-auto mt-4"></div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 min-h-[40px] ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative rounded-xl overflow-hidden bg-glass hover:shadow-2xl transition-all duration-300 flex flex-col ${
                project.featured ? "border-blue-500/40 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/20" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
              whileHover={{ y: -8 }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/30">
                  ⭐ Featured
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                {/* Logo overlay */}
                {project.logo && (
                  <div className={`absolute bottom-3 left-3 w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${project.logoBg || 'bg-slate-900/80'} backdrop-blur-md border border-white/20 p-2 flex items-center justify-center shadow-lg`}>
                    <img src={project.logo} alt={`${project.title} logo`} className="w-full h-full object-contain" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-200 leading-tight mb-2">{project.title}</h3>
                <span className="inline-block text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">{getCategoryLabel(project.category)}</span>
                <p className="text-slate-400 text-sm leading-relaxed mb-3 flex-1">{project.description}</p>
                {project.techStack && (
                  <p className="text-xs text-slate-500 font-medium mb-4">{project.techStack}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-500/10 border border-blue-500/25 text-blue-300 rounded-lg text-xs font-medium hover:bg-blue-500/25 hover:text-white hover:-translate-y-0.5 transition-all min-h-[36px]"
                    >
                      {link.icon} {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center mt-12" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all min-h-[44px]">
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
