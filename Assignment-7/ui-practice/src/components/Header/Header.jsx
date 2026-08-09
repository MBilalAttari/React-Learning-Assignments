import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { FaBarcode, FaBars, FaTimeline } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const navLinks = ["Home", "Products", "Gallery", "Contact"];
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
    >
      <motion.div
        className={styles.logo}
        whileHover={{ scale: 1.1, rotate: -2 }}
        whileTap={{ scale: 1, rotate: 0 }}
      >
        <img src={logo} color="" alt="Logo" className={styles.logoImg} />
        <h1 className={styles.logoTxt}>PearlyLoops</h1>
      </motion.div>
      <nav className={styles.desktopNav}>
        {navLinks.map((link, index) => (
          <motion.a
            key={index}
            className={styles.navItem}
            href="#"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            {link}
          </motion.a>
        ))}
      </nav>
      
        <button
          className={styles.toggleBtn}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      <motion.nav
       className={`${styles.mobileNav} ${isOpen ? styles.open : ""}`}
       initial={{ width: 0, opacity: 0 }}
       animate={{ width: isOpen ? "45%" : 0, opacity: isOpen ? 1 : 0 }}
       transition={{ duration: 0.3, ease: "easeInOut" }}
       >
        {navLinks.map((link, index) => (
          <motion.a
            key={index}
            className={styles.navItem}
            href="#"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            {link}
          </motion.a>
        ))}
      </motion.nav>
    </motion.header>
  );
};

export default Header;
