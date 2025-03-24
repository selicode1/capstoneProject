import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero d-flex flex-column justify-content-center text-white">
      <div className="container">
        <h1 className="display-4 fw-normal text-start slide-in2">
          Sustainable <span className="farming">Farming</span> For A Better
          Tomorrow
        </h1>
        <p className="mt-3 lead slide-in2">
          Join a community revolutionizing agriculture with sustainable
          practices.
        </p>
      </div>
      {/* <a href="" className="explore">
        Explore More ↓
      </a> */}
    </section>
  );
};

export default Hero;
