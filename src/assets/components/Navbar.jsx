import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';
import logo from '../../assets/images/logo.jpg';

export default function Navbar({ toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const links = ['About', 'Skills', 'Projects', 'Testimonials','Contact'];

  useEffect(() => {
    setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
  }, []);

  const handleTheme = () => {
    toggleTheme();
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img className="logoImg" src={logo} alt="logo" />
          <div className="logo">SoftNation.Dev</div>
        </div>

        <div className="desktop-links">
          {links.map((link) => (
            <a href={`#${link.toLowerCase()}`} key={link} className="nav-link">
              {link}
            </a>
          ))}
        </div>

        <div className="controls">
          <button
            aria-label="toggle theme"
            onClick={handleTheme}
            className="icon-btn theme"
          >
            {isDark ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
          </button>
          <button
            aria-label="menu"
            onClick={() => setMenuOpen(true)}
            className="icon-btn menu-trigger menu"
          >
            <FaBars className="menu-icon" />
          </button>
        </div>
      </nav>

      {/* Fullscreen animated menu overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="overlay-content">
          <div className="close-row">
            <button
              aria-label="close menu"
              className="icon-btn close-btn"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes size={24} />
            </button>
          </div>
          <div className="menu-links">
            {links.map((link) => (
              <a
                href={`#${link.toLowerCase()}`}
                key={link}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="backdrop" onClick={() => setMenuOpen(false)} />
      </div>
    </>
  );
}
