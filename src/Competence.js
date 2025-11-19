import React from "react";
import "./Competence.css";

const frontendSkills = [
  { name: "Angular", level: 90 },
  { name: "React", level: 95 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Bootstrap", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Cytoscape.js", level: 80 },
  { name: "HTML/CSS", level: 95 },
];

const backendSkills = [
  { name: "POO", level: 90 },
  { name: "Java", level: 95 },
  { name: "C / C++", level: 85 },
  { name: "Spring Boot", level: 90 },
  { name: "Spring Security", level: 85 },
  { name: "Hibernate", level: 85 },
  { name: "MySQL", level: 90 },
  { name: "Jackson XML", level: 80 },
];

const testingSkills = [
  { name: "JUnit", level: 90 },
  { name: "Selenium", level: 85 },
  { name: "Cucumber", level: 80 },
  { name: "Postman", level: 85 },
];

const devOpsSkills = [
  { name: "Docker", level: 90 },
  { name: "Kubernetes", level: 85 },
  { name: "Microservices", level: 90 },
  { name: "CI/CD", level: 85 },
  { name: "Git", level: 95 },
  { name: "AWS", level: 80 },
];

const SkillBar = ({ skill }) => (
  <div className="skill">
    <div className="skill-name">{skill.name}</div>
    <div className="skill-bar">
      <div className="skill-level" style={{ width: `${skill.level}%` }}>
        <span className="skill-percent">{skill.level}%</span>
      </div>
    </div>
  </div>
);

const Competence = () => {
  return (
    <section id="competences" className="competence-section">
      <h2>
        Mes <span>Compétences</span>
      </h2>
      <p className="subtitle">
        Technologies et outils que je maîtrise pour créer des applications performantes
      </p>
      <div className="competence-container">
        <div className="competence-column">
          <h3>Frontend</h3>
          {frontendSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
        <div className="competence-column">
          <h3>Backend</h3>
          {backendSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
        <div className="competence-column">
          <h3>Testing</h3>
          {testingSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
        <div className="competence-column">
          <h3>DevOps & Cloud</h3>
          {devOpsSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competence;
