import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/footer";
import "../assets/styles/testimonials.css";

const testimonials = [
  {
    name: "Tomi A.",
    role: "Product Founder",
    quote:
      "Every screen felt intentional. The UI was clean, fast, and easy to trust. Great communication throughout.",
  },
  {
    name: "Chidera N.",
    role: "Startup Owner",
    quote:
      "He translated a rough idea into a clear, modern product. The polish and responsiveness were top tier.",
  },
  {
    name: "Sarah O.",
    role: "Community Lead",
    quote:
      "Delivered a smooth experience with thoughtful motion and accessibility. Our users noticed the difference.",
  },
  {
    name: "Kelvin M.",
    role: "Frontend Dev",
    quote:
      "The component system was structured and easy to maintain. Great attention to detail.",
  },
  {
    name: "Grace I.",
    role: "Creative Director",
    quote:
      "Visuals were bold without being noisy. The interface feels premium and calm at the same time.",
  },
  {
    name: "Emeka U.",
    role: "Operations",
    quote:
      "The workflow was efficient and the final build was reliable. Will collaborate again.",
  },
];

export default function Testimonials({ toggleTheme }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="testimonials-page">
      <Navbar toggleTheme={toggleTheme} />
      <main className="testimonials-shell">
        <section className="testimonials-hero">
          <div>
            <p className="testimonials-eyebrow">Testimonials</p>
            <h1 className="testimonials-title">Signals of trust from people I have built with.</h1>
            <p className="testimonials-lede">
              From startups to community platforms, I focus on building calm, modern interfaces
              that feel effortless to use. Here is what collaborators say after we ship.
            </p>
            <div className="testimonials-actions">
              <Link className="testimonials-btn primary" to="/projects">
                View Projects
              </Link>
              <a
                className="testimonials-btn"
                href="https://wa.me/2348141787294"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a Conversation
              </a>
            </div>
          </div>
          <div className="testimonials-glow">
            <div className="glow-card">
              <div className="glow-title">Client outcomes</div>
              <div className="glow-metrics">
                <div>
                  <span>12+</span>
                  <small>projects shipped</small>
                </div>
                <div>
                  <span>90%</span>
                  <small>return clients</small>
                </div>
                <div>
                  <span>4.9</span>
                  <small>average rating</small>
                </div>
              </div>
              <p className="glow-note">Clean delivery, calm collaboration, visible results.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-title">Words from collaborators</h2>
          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <article className="testimonial-card" key={index}>
                <div className="quote-mark">"</div>
                <p className="quote-text">{item.quote}</p>
                <div className="quote-footer">
                  <span className="quote-name">{item.name}</span>
                  <span className="quote-role">{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials-cta">
          <h3>Ready for your next build?</h3>
          <p>Lets create a clean, modern experience that your users will love.</p>
          <Link className="testimonials-btn primary" to="/contact">
            Contact Me
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
