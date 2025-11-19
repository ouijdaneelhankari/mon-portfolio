import React from "react";
import './Projet.css';

const projects = [
  {
    name: "E-Commerce Platform",
    reviewLink: "https://example.com/review-ecommerce",
    githubLink: "https://github.com/user/ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://via.placeholder.com/300x180"
  },
  {
    name: "Task Management App",
    reviewLink: "https://example.com/review-tasks",
    githubLink: "https://github.com/user/taskapp",
    technologies: ["React", "FastAPI", "PostgreSQL", "WebSocket"],
    image: "https://via.placeholder.com/300x180"
  }
];

const PortfolioTable = () => {
  return (
      <div id="projets" className="portfolio-section">

     
      <div className="section-title">
        <h2>
          Mes <span>Projets</span>
        </h2>
        <p>
          Technologies et outils que je maîtrise pour créer des applications performantes
        </p>
      </div>

   <div className="projects-container">
  {projects.map((project, index) => (
    <div className="project-card" key={index}>
      <img src={project.image} alt={project.name} />
      <div className="project-content">
        <h3>{project.name}</h3>

        <div className="tech-list">
          {project.technologies.map((tech, i) => (
            <span className="tech-tag" key={i}>{tech}</span>
          ))}
        </div>

        <div className="links">
          <a href={project.reviewLink} target="_blank" rel="noreferrer">
            Live Review
          </a>
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
    

  );
};

export default PortfolioTable;
