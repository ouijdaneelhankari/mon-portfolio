import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

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
          <FaEnvelope className="contact-icon" />
          
          <p>elhankariouijdane@gmail.com</p>
        </div>

        <a
          href="https://www.linkedin.com/in/ouijdane-el-hankari-90307a274/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card link-card"
        >
          <FaLinkedin className="contact-icon" />
          
          <p>Ouijdane EL HANKARI</p>
        </a>

        <a
          href="https://github.com/ouijdaneelhankari"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card link-card"
        >
          <FaGithub className="contact-icon" />
         
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
