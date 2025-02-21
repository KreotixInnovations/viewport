import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  { title: "IT Solutions", description: "Web development, personal portfolios, and business sites." },
  { title: "IoT & Innovation", description: "IoT projects, embedded systems, and PCB designs." },
  { title: "Wearables", description: "Custom-designed T-shirts and jerseys." },
  { title: "Digital Arts", description: "Posters, video editing, and graphic designs." }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="service-container">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="service-box" 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
