import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const NavBar = () => {
  const { scrollY } = useScroll(); // Tracks vertical scroll position
  const [scrollDirection, setScrollDirection] = useState("up");

  // Detects if user is scrolling up or down
  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious() || 0;
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  return (
    <motion.nav
      className="navbar"
      style={{
        background: scrollDirection === "down" ? "rgba(31, 40, 51, 0.7)" : "rgba(31, 40, 51, 1)",
        backdropFilter: scrollDirection === "down" ? "blur(8px)" : "none",
        opacity: scrollDirection === "down" ? 0.8 : 1, // 👈 Fades the navbar
        transition: "background 0.3s ease-in-out, backdrop-filter 0.3s, opacity 0.3s ease-in-out",
      }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">Rick & Morty Explorer</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default NavBar;
