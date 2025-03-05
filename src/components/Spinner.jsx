import React from "react";
import { motion } from "motion/react";

const Spinner = () => {
  return (
    <motion.div
      className="portal-spinner"
      initial={{ rotate: 0, scale: 0.8 }}
      animate={{ rotate: 360, scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
    >
      <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="portalGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#66fcf1" stopOpacity="1" />
            <stop offset="100%" stopColor="#45a29e" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="30" stroke="url(#portalGradient)" strokeWidth="6" fill="none" />
        <circle cx="50" cy="50" r="25" stroke="#66fcf1" strokeWidth="3" fill="none" opacity="0.6" />
        <circle cx="50" cy="50" r="20" stroke="#45a29e" strokeWidth="2" fill="none" opacity="0.4" />
      </svg>
    </motion.div>
  );
};

export default Spinner;
