import React from "react";
import "./contactus.css";

const Contactus = () => {
  return (
    <section className="contact">
      <div className="container">
        <h1 className="fw-normal text-start slide-up">
          Be Part of Dynamic Community Focused On Advancing Agriculture Together
        </h1>
        <p className="mt-3 lead slide-up">
          Become part of a supportive community dedicated to fostering innovation in agriculture. Engage in discussions, ask questions, and share your experiences with fellow enthusiasts and experts.
        </p>

        <div className="image-container">
          <div className="decorative-dots1 top-left1"></div>
          <img src="/src/assets/fam6.jpeg" alt="Farm Rows" className="img1 slide-right" />
          <img src="/src/assets/fam7.jpeg" alt="Greenhouse" className="img2 slide-left" />
          <div className="decorative-dots1 bottom-right1"></div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
