import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/footer";
import "../assets/styles/contact.css";

export default function Contact({ toggleTheme }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="contact-page">
      <Navbar toggleTheme={toggleTheme} />
      <main className="contact-shell">
        <section className="contact-hero">
          <div>
            <p className="contact-eyebrow">Contact</p>
            <h1 className="contact-title">Let us build something calm, modern, and unforgettable.</h1>
            <p className="contact-lede">
              I am open to freelance builds, product collaborations, and creative partnerships.
              If you have an idea, I will help you shape it into a clean experience.
            </p>
            <div className="contact-actions">
              <a
                className="contact-btn primary"
                href="https://wa.me/2348141787294"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp Me
              </a>
              <Link className="contact-btn" to="/projects">
                View Projects
              </Link>
            </div>
          </div>
          <div className="contact-panel">
            <div className="contact-card">
              <h3>Direct line</h3>
              <p className="contact-number">+234 814 178 7294</p>
              <div className="contact-note">Fastest response on WhatsApp.</div>
              <div className="contact-chips">
                <span>UI/UX</span>
                <span>Frontend</span>
                <span>React Native</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-grid">
          <div className="contact-card" aria-label="Email">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h4>Email</h4>
            <p>Send a quick overview of your project and timeline.</p>
            <a className="contact-link" href="mailto:hello@softnation.dev">
              ifeanyieee8105@gmail.com
            </a>
          </div>

          <div className="contact-card" aria-label="WhatsApp">
            <div className="contact-icon">
              <FaWhatsapp />
            </div>
            <h4>WhatsApp</h4>
            <p>Ideal for quick updates and rapid collaboration.</p>
            <a
              className="contact-link"
              href="https://wa.me/2348141787294"
              target="_blank"
              rel="noopener noreferrer"
            >
              +234 814 178 7294
            </a>
          </div>

          <div className="contact-card" aria-label="Socials">
            <div className="contact-icon">
              <FaGithub />
            </div>
            <h4>Socials</h4>
            <p>Explore my work and connect on social platforms.</p>
            <div className="contact-socials">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <h3>Ready when you are.</h3>
          <p>Share your idea, your timeline, and the problem you want solved.</p>
          <a
            className="contact-btn primary"
            href="https://wa.me/2348141787294"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start on WhatsApp
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
