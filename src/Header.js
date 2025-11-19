import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  // Fonction pour scroll smooth et fermer menu mobile
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // ferme le menu hamburger après clic
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <div className="header-logo">
          <span>Ouijdane EL HANKARI </span>
        </div>

        {/* MENU */}
        <nav className={`header-menu ${open ? "open" : ""}`}>
          <a href="#apropos" onClick={e => handleClick(e, "apropos")}>À propos</a>
          <a href="#competences" onClick={e => handleClick(e, "competences")}>Compétences</a>
          <a href="#projets" onClick={e => handleClick(e, "projets")}>Projets</a>
          <button className="header-btn" onClick={e => handleClick(e, "contact")}>
            Me Contacter
          </button>
        </nav>

        {/* HAMBURGER */}
        <div className="header-burger" onClick={() => setOpen(!open)}>
          <div></div><div></div><div></div>
        </div>

      </div>
    </header>
  );
};

export default Header;
