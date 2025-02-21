import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>About Us</h2>
      <p>We specialize in IT solutions, IoT projects, wearables, and digital arts.</p>
    </motion.section>
  );
};

export default About;
