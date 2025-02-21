import React, { useState, useEffect, useRef } from "react";
import { Instagram, Mail, Linkedin } from "lucide-react";
import "./App.css";
import itBg from "./components/it-bg.jpg";
import digitalBg from "./components/digital-bg.jpg";
import iotBg from "./components/iot-bg.jpg";
import wearablesBg from "./components/wearables-bg.jpg";

const ServiceCard = ({ title, description, image }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="service-card-container" onClick={() => setFlipped(!flipped)}>
      <div className={`service-card ${flipped ? "flipped" : ""}`}>
        <div className="service-card-front" style={{ backgroundImage: `url(${image})` }}>
          <h3>{title}</h3>
        </div>
        <div className="service-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Close menu on resize if switching to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Scroll to the home section when the component mounts
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <a href="#home">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
          </a>
        </div>

        {/* Mobile Menu */}
        {isMobile ? (
          <>
            <div className="hamburger" onClick={toggleMenu}>
              {menuOpen ? "✖" : "☰"} {/* Change icon when menu is open/closed */}
            </div>
            <ul className={`nav-links mobile-menu ${menuOpen ? "open" : ""}`}>
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
              <li><a href="#services" onClick={toggleMenu}>Our Services</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
            </ul>
          </>
        ) : (
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#">   </a></li>
          </ul>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="section home">
        <video autoPlay loop muted className="video-bg">
        <source src={`${process.env.PUBLIC_URL}/service.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1 className="main-text">Innovate. Create. Transform.</h1>
          <div className="typewriter">
            <h2>Welcome to Kreotix Innovations !</h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about" ref={aboutRef}>
        <div className="content">
          <h1>About Us</h1>
          
          <div className="about-details">
            <h2>Who We Are</h2>
            <p>At Kreotix Innovations, we believe in innovation-driven excellence. Our team of tech enthusiasts, designers, and engineers work together to bring creative, technological, and practical solutions to individuals, students, businesses, and organizations.</p>
            <h2>Our Mission</h2>
            <p>Our mission is to empower individuals, students, and businesses by providing high-quality, innovative, and affordable technology and design solutions.</p>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>✔️ Passion for Innovation – We don’t just build projects; we create solutions that make an impact.</li>
              <li>✔️ Multi-Domain Expertise – From electronics to design, we cover a wide range of services.</li>
              <li>✔️ Affordable & Reliable – High-quality work at cost-effective pricing.</li>
              <li>✔️ Customer-Centric Approach – We work closely with clients to bring their vision to reality.</li>
            </ul>
            <p>Join us on our journey to create, innovate, and transform the future!</p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
        <section id="services" className="section services">
          <div className="content">
            <h1>Our Services</h1>
            <div className="service-boxes">
          <ServiceCard title="IT Solutions" description="We provide guidance for your personal projects, help you build your portfolio, and create websites for small businesses" image={itBg} />
          <ServiceCard title="Digital Arts" description="We provide video editing, Photoshop services, banner and poster design, digital marketing, and UI/UX consultancy" image={digitalBg} />
          <ServiceCard title="IoT & Electronics" description="We provide guidance for your personal projects, smart solutions for your company and home, PCB design, and CAD work" image={iotBg} />
          <ServiceCard title="Wearables" description="We Design and Print Jerseys for your Team, Designing Sports kits and Mockups" image={wearablesBg} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="content">
          <h1>Contact Us</h1>
          <h2> Need a quotation? Want to Join our Team?</h2>
          <h3>Just hit the link – we're open for collaboration!</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/crepixdesign?igsh=eXQyNXM4dGs1ZWE1"><Instagram size={32} /></a>
            <a href="mailto:kreotixinnovations@gmail.com"><Mail size={32} /></a>
            <a href="https://www.linkedin.com/company/kreotix-innovations/"><Linkedin size={32} /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Kreotix Innovations. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;