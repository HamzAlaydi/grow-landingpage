import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = 'https://wa.me/201044381820?text=Hi%20Grow%20Software%2C%20I%27d%20like%20to%20discuss%20a%20project!';

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[9999] flex items-center gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="hidden sm:block bg-[#0a192f]/95 text-slate-200 px-4 py-2.5 rounded-lg text-sm font-medium border border-white/10 shadow-xl whitespace-nowrap"
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white text-2xl sm:text-3xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow animate-pulse-glow"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
