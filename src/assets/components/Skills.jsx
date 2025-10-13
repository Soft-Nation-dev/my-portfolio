import React from 'react';
import '../styles/Skills.css';

const skillsData = [
  {
    title: 'HTML/CSS',
    description: 'Experienced in building responsive and accessible layouts.',
  },
  {
    title: 'JavaScript',
    description: 'Skilled in writing clean, modular, and modern JavaScript code.',
  },
  {
    title: 'React',
    description: 'Built multiple single-page applications with hooks and components.',
  },
  {
    title: 'React Native',
    description: 'Developed cross-platform mobile apps with smooth performance.',
  },
];

export default function Skills() {
  return (
    <>
    <h2 className="skills-title">Skills</h2>
    <section className="skills-section skills-grid">
      {skillsData.map((skill, index) => (
        <div className="skill-card" key={index}>
          <h3>{skill.title}</h3>
          <p>{skill.description}</p>
        </div>
      ))}
      </section>
      </>
  );
}
