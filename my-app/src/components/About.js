import React from "react";
import "../components/About.css";
import aboutImg from "../assets/about-sports.jpg";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-overlay">
          <h1>About Us</h1>
          <p>Powering Passion. Supporting Performance.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-image">
          <img src={aboutImg} alt="Sports Equipment" />
        </div>

        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are a dedicated sports equipment store focused on delivering
            high-quality products for athletes, fitness enthusiasts, and sports
            lovers of all levels. Our goal is to support your journey toward
            strength, endurance, and excellence.
          </p>

          <h2>Our Mission</h2>
          <p>
            To inspire an active lifestyle by providing reliable, affordable,
            and premium sports gear while maintaining exceptional customer
            service.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="about-features">
        <div className="feature-card">
          <h3>🏆 Quality Products</h3>
          <p>Only trusted and durable sports equipment.</p>
        </div>

        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Quick and safe delivery at your doorstep.</p>
        </div>

        <div className="feature-card">
          <h3>💳 Secure Payment</h3>
          <p>100% safe and secure online transactions.</p>
        </div>
      </section>
    </div>
  );
};

export default About;