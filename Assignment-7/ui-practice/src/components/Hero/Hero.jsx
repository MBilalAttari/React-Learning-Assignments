import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/logo.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        <img className={styles.heroImg} src={heroImg} alt="Hero" />
      </motion.div>
      <motion.div
        className={styles.heroText}
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 50 }}
      >
        <h2 className={styles.head2}>handmade</h2>
        <h1 className={styles.head1}>crochet creations</h1>
        <p className={styles.para}>
          Cute handmade crochet tops, flowers, keychains, and accessories made
          with love and creativity.
        </p>
        <motion.div
         className={styles.btnContainer}
       initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1, type: "spring", stiffness: 120 }}
       >
          <button className={styles.btn}>shop now</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
