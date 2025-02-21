import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="home-section"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to Kreotix Innovations</h1>
      <p>Your one-stop solution for IT, IoT, and Digital Arts</p>
    </motion.section>
  );
};

export default Home;
