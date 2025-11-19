import React from "react";
import "./Apropos.css";

const APropos = () => {
  return (
    <section  id="apropos"className="apropos-section">
      <div className="apropos-container">

        <h1 className="apropos-title-main">
          À propos <span>de moi</span>
        </h1>

        <p className="apropos-description">
          Passionné par le développement web depuis plus de 5 ans, je me
          spécialise dans la création d'applications full-stack robustes et
          évolutives. Mon expertise couvre le développement frontend avec
          React, le backend avec Node.js et Python, ainsi que la conception
          de bases de données et l'architecture cloud.
        </p>

        {/* 🔥 Nouveau conteneur gris */}
        <div className="apropos-contact-box">
          <div className="contact-item">
            <span>📍 Paris, France</span>
          </div>
          <div className="contact-item">
            <span>📧 contact@alexandre-martin.dev</span>
          </div>
        </div>

        <h3 className="apropos-subtitle">Ce que je fais</h3>

        {/* 🔥 Skills en style gris */}
        <div className="apropos-skills gray-skills">
          <span>Développement Web</span>
          <span>API & Backend</span>
          <span>Architecture Logicielle</span>
          <span>UI/UX Implementation</span>
        </div>

      </div>
    </section>
  );
};

export default APropos;
