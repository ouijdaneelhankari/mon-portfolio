import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projets");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Bonjour, Je suis <span>Ouijdane EL HANKARI</span></h1>
        <p>Développeuse Full-Stack – 5 ans d’expérience</p>
        <button className="hero-btn" onClick={scrollToProjects}>
          Voir mes projets
        </button>
      </div>
    </div>
  );
};

export default Hero;
