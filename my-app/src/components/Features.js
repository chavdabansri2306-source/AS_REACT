import React from "react";
import OIP1 from "../assets/OIP1.webp";
import bat1 from "../assets/bat1.jpg";
import c from "../assets/c.jpg";
import chass from "../assets/chass.jpg";
import batmitan from "../assets/batmitan.jpg";
import Ludoo from "../assets/Ludoo.jpg";
import uno from "../assets/uno.jpg";
import sockar from "../assets/sockar.jpg";
import game from "../assets/game.jpg";


const Features = () => {
  return (
    <section className="features">
      <h2>Discover More <span>Good things.</span></h2>

      <br></br>

      <div className="feature-cards">
        <div className="card">
          <h5>Explore new arrivals</h5>
          <h3>Give the gift of choice!</h3>
          <button>Show me all</button>
           <img src={bat1} alt="Bat" className="bat"/>
        </div>

        <div className="card">
          <h5>Explore new arrivals</h5>
          <h3>Give the gift of choice!</h3>
          <button>Show me all</button>
          <img src={OIP1} alt="Shoe" className="oip1"/>
        </div>

        <div className="card">
          <h5>Explore new arrivals</h5>
          <h3>Give the gift of choice!</h3>
          <button>Show me all</button>
          <img src={c} alt="Shoe" className="oip1"/>
        </div>

         <div className="card">
          <h5>Explore new arrivals</h5>
          <h3>Give the gift of choice!</h3>
          <button>Show me all</button>
          <img src={chass} alt="Shoe" className="oip1"/>
        </div>

         <div className="card">
          <h5>Explore new arrivals</h5>
          <h3>Give the gift of choice!</h3>
          <button>Show me all</button>
          <img src={batmitan} alt="Shoe" className="oip1"/>
        </div>

        <div className="card">
          <h5>Explore new arrivals</h5>
          <h3>Give the gift of choice!</h3>
          <button>Show me all</button>
          <img src={Ludoo} alt="Shoe" className="oip1"/>
        </div>

        <div className="card">
          <h5>Explore new arrivals</h5>
          <h3>Give the gift of choice!</h3>
          <button>Show me all</button>
          <img src={uno} alt="Shoe" className="oip1"/>
        </div>

         <div className="card">
          <h5>Explore new arrivals</h5>
          <h3>Give the gift of choice!</h3>
          <button>Show me all</button>
          <img src={sockar} alt="Shoe" className="oip1"/>
        </div>

        <div className="card">
          <h5>Explore new arrivals</h5>
          <h3>Give the gift of choice!</h3>
          <button>Show me all</button>
          <img src={game} alt="Shoe" className="oip1"/>
        </div>

      </div>
    </section>
  );
};

export default Features;
