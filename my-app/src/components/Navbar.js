import React from "react";
import "../style/main.css";
import AS1 from "../assets/AS1.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={AS1} alt="Logo" className="logo" />
            <header className="sticky">
      <ul className="nav">
        <li><a href="/" className="active">Home</a></li>
        <li><a href="/">Shop</a></li>
        <li><a href="/">Contact</a></li>
      </ul>

      <div className="icons">
        <input type="text" placeholder="Search here..." />
      </div>

      <div className="buttons">
        <button>All</button>
        <button>Outdoor-Game</button>
        <button>Indoor-Game</button>
        <button>GYM</button>
        <button>Clothes</button>
      </div>
    </header>

      </nav>
  );
}

export default Navbar;