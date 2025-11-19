import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>
        Me <span>Contacter</span>
      </h2>
      <p className="contact-subtitle">
        Vous pouvez me joindre via les plateformes suivantes
      </p>

      <div className="contact-container">

        <div className="contact-card">
        
          <h3>Téléphone</h3>
          <p>+33745639822</p>
        </div>

        <div className="contact-card">
          <h3>Email</h3>
          <p>elhankariouijdane@gmail.com</p>
        </div>

        <a
          href="https://www.linkedin.com/in/ouijdane-el-hankari"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card link-card"
        >
         
          <h3>LinkedIn</h3>
          <p>Ouijdane EL HANKARI</p>
        </a>

        <a
          href="https://github.com/ouijdaneelhankari"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card link-card"
        >
        
          <h3>GitHub</h3>
          <p>Mon GitHub</p>
        </a>

      </div>

      <footer className="contact-footer">
        © 2026 Ouijdane EL HANKARI. Tous droits réservés.
      </footer>
    </section>
  );
};

export default Contact;
