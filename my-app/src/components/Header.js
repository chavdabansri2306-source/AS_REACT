import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginSignup from "./LoginSignup";
import logo from "../assets/logo.jpg";
import "./Header.css";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <header className="header">
      {/* LEFT - Logo */}
      <div className="header-left">
        <img src={logo} alt="Ajay Sports Logo" className="logo-img" />
      </div>

      {/* CENTER - Brand name */}
      <div className="header-center">
        <h2 className="logo-text">AjaySports:SportifyHub</h2>
      </div>

      {/* RIGHT - Nav + Login */}
      <div className="header-right">
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>

        <button className="login" onClick={() => setShowPopup(true)}>
          Login
        </button>
      </div>

      {/* Login Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <LoginSignup onClose={() => setShowPopup(false)}/>
           
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;