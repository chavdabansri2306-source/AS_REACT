import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-box">
          <h3>Ajay Sports</h3>
          <p>
            Best quality sports items at affordable prices.
            Cricket, Football, Gym & more.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Sports Categories */}
        <div className="footer-box">
          <h3>Sports</h3>
          <ul>
            <li>Cricket</li>
            <li>Football</li>
            <li>Badminton</li>
            <li>Gym Equipment</li>
          </ul>
        </div>  

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p>📞 +91 9067282504</p>
          <p>📧 ajaysports@gmail.com</p>
          <p>📍 Ahmedabad, India</p>
        </div>

      </div>
      {/* Copyright */}
      <div className="footer-bottom">
        © 2025 Ajay Sports | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;