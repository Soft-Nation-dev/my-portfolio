import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-content">
        <h2 className="footer-logo">softnation.dev</h2>
        
        <ul className="footer-links">
          <li><a href="#hero">Tesmonials</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Emmanuel Ifeanyi. All Rights Reserved.</p>
    </footer>
  );
}
