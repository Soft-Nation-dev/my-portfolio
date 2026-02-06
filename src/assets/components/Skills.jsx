import React from 'react';
import '../styles/Skills.css';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiJavascript, SiReact, SiAndroid, SiApple } from 'react-icons/si';

export const skillsData = [
  {
    title: 'HTML / CSS',
    description: 'Experienced in building responsive and accessible layouts.',
    icon: <><FaHtml5 color="#E44D26" /> <FaCss3Alt color="#1572B6" /></>,
  },
  {
    title: 'JavaScript',
    description: 'Skilled in writing clean, modular, and modern JavaScript code.',
    icon: <SiJavascript color="#F7DF1E" />,
  },
  {
    title: 'React',
    description: 'Built multiple single-page applications with hooks and components.',
    icon: <FaReact color="#61DBFB" />,
  },
  {
    title: 'React Native',
    description: 'Developed cross-platform mobile apps with smooth performance.',
    icon: <><SiReact color="#61DBFB" /> <SiAndroid color="#3DDC84" /> <SiApple color="#A2AAAD" /></>,
  },
];

export default function Skills() {
  return (
    <>
      <h2 className="skills-title">Skills</h2>
      <section className="skills-section skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}
