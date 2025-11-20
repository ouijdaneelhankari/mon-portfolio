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
        Passionnée par le développement web, je me spécialise dans la création d’applications complètes, robustes et évolutives. J’interviens aussi bien sur la partie visible pour l’utilisateur que sur la logique serveur, et je maîtrise la conception de systèmes de données ainsi que la mise en place d’architectures modernes et performantes.
        </p>

        

        <h3 className="apropos-subtitle">Domaines d’expertise</h3>

        {/* 🔥 Skills en style gris */}
        <div className="apropos-skills gray-skills">
          <span>Developement Fullstack</span>
          <span>DevOps</span>
          <span>Architecture Logicielle</span>
          <span>Conception</span>
        </div>

      </div>
    </section>
  );
};

export default APropos;
