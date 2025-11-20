import React, { useState } from "react";
import "./Header.css";
import logo from "./images/Logo.JPG"; // ← Assure-toi d'avoir un fichier logo.png dans le même dossier ou ajuste le chemin

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <div className="header-logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span>Ouijdane EL HANKARI</span>
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
