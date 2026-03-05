// Hero.jsx
import "./Hero.css";
import "../assets/hero-bg.jpg";

function Hero() {
  return (
    <section className="hero">
      {/* Blurred Background */}
      <div className="hero-bg"></div>

      {/* Center Content */}
      <div className="hero-content">
        <h1>Sports Equipment Collection</h1>
        <p>In this season find the best 🏀</p>

        <div className="hero-buttons">
          <button>All</button>
          <button>Outdoor Game</button>
          <button>Indoor Game</button>
          <button>Gym</button>
          <button>Clothes</button>
        </div>

        <button className="explore-btn">Explore Now</button>
      </div>
    </section>
  );
}

export default Hero;