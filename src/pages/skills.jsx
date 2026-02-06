import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/footer";
import { skillsData } from "../assets/components/Skills";
import "../assets/styles/skills-page.css";

export default function SkillsPage({ toggleTheme }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="skills-page">
      <Navbar toggleTheme={toggleTheme} />
      <main className="skills-shell">
        <section className="skills-hero">
          <div>
            <p className="skills-eyebrow">Skills & Tools</p>
            <h1 className="skills-title">Design-led development with clean, modern execution.</h1>
            <p className="skills-lede">
              I focus on building interfaces that feel effortless while staying strong under
              real product pressure. My toolkit spans web, mobile, and backend integrations.
            </p>
            <div className="skills-actions">
              <Link className="skills-btn primary" to="/projects">
                See My Work
              </Link>
              <a
                className="skills-btn"
                href="https://wa.me/2348141787294"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a Conversation
              </a>
            </div>
          </div>
          <div className="skills-highlight">
            <div className="highlight-card">
              <h3>Core Stack</h3>
              <div className="pill-row">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>React Native</span>
              </div>
              <div className="highlight-note">
                Building responsive, accessible, and motion-forward experiences.
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-title">What I use daily</h2>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <article className="skills-card" key={index}>
                <div className="skills-icon">{skill.icon}</div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-columns">
          <div>
            <h2 className="section-title">How I build</h2>
            <ul className="steps">
              <li>Translate product goals into clear UI structure.</li>
              <li>Design components that scale across screens and states.</li>
              <li>Ship fast with clean code and performance in mind.</li>
            </ul>
          </div>
          <div className="skills-panel">
            <h3>Currently exploring</h3>
            <p>Supabase + Cloudflare backends, React Native workflows, and interaction design.</p>
            <div className="pill-row muted">
              <span>Supabase</span>
              <span>Cloudflare</span>
              <span>Expo</span>
              <span>Motion</span>
            </div>
          </div>
        </section>

        <section className="skills-cta">
          <h3>Let us build something memorable.</h3>
          <p>Open for freelance projects, product builds, and design-driven collaborations.</p>
          <Link className="skills-btn primary" to="/projects">
            Explore Projects
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
