import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/footer";
import "../assets/styles/about.css";

export default function About({ toggleTheme }) {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
	}, [location.pathname]);

	return (
		<div className="about-page">
			<Navbar toggleTheme={toggleTheme} />
			<main className="about-shell">
				<section className="about-hero">
					<div>
						<p className="about-eyebrow">About Me</p>
						<h1 className="about-title">Building digital spaces with soul and structure.</h1>
						<p className="about-lede">
							I am a frontend developer who loves clean systems, expressive visuals, and
							smooth user journeys. I turn ideas into interfaces that feel calm, modern,
							and intentionally crafted.
						</p>
						<div className="about-actions">
							<Link className="about-btn primary" to="/projects">
								View Projects
							</Link>
							<a
								className="about-btn"
								href="https://wa.me/2348141787294"
								target="_blank"
								rel="noopener noreferrer"
							>
								Start a Conversation
							</a>
						</div>
					</div>
					<div className="about-portrait">
						<div className="portrait-card">
							<div className="portrait-title">Design Philosophy</div>
							<p className="about-lede">
								Minimal noise. Maximum clarity. Interfaces should feel like a guided story.
							</p>
							<div className="portrait-metrics">
								<div className="metric">
									<span>40+</span>
									<small>UI screens shipped</small>
								</div>
								<div className="metric">
									<span>12</span>
									<small>creative builds</small>
								</div>
								<div className="metric">
									<span>6</span>
									<small>tools in daily stack</small>
								</div>
								<div className="metric">
									<span>3</span>
									<small>years of growth</small>
								</div>
							</div>
						</div>
					</div>
                </section>
                

				<section>
					<h2 className="section-title">What I bring</h2>
					<div className="about-grid">
						<article className="about-card">
							<h4>Frontend storytelling</h4>
							<p>Layouts that breathe, typography that speaks, and motion that guides.</p>
						</article>
						<article className="about-card">
							<h4>Backend integration</h4>
							<p>Built app backends with Supabase and Cloudflare to ship fast, secure features.</p>
						</article>
						<article className="about-card">
							<h4>Mobile-first delivery</h4>
							<p>Currently building a React Native app with a focus on UX and performance.</p>
						</article>
					</div>
				</section>

				<section>
					<h2 className="section-title">My journey</h2>
					<div className="timeline">
						<div className="timeline-item">
							<div className="timeline-year">2021</div>
							<div className="timeline-desc">Started with HTML and CSS, exploring visual design.</div>
						</div>
						<div className="timeline-item">
							<div className="timeline-year">2022</div>
							<div className="timeline-desc">Built interactive pages with JavaScript and React.</div>
						</div>
						<div className="timeline-item">
							<div className="timeline-year">2023</div>
							<div className="timeline-desc">Deepened UI craft, motion, and component systems.</div>
						</div>
						<div className="timeline-item">
							<div className="timeline-year">2024</div>
							<div className="timeline-desc">Shipped backends with Supabase and Cloudflare integrations.</div>
						</div>
						<div className="timeline-item">
							<div className="timeline-year">Now</div>
							<div className="timeline-desc">Building a React Native app while refining web experiences.</div>
						</div>
					</div>
				</section>

				<section>
					<h2 className="section-title">Values</h2>
					<div className="values">
						<div className="value-pill">Clarity over clutter</div>
						<div className="value-pill">Bold yet balanced visuals</div>
						<div className="value-pill">Purposeful motion</div>
						<div className="value-pill">Consistency in systems</div>
					</div>
				</section>

				<section className="about-cta">
					<h3>Let us build something beautiful together.</h3>
					<p>Open to collaborations, freelance work, and creative partnerships.</p>
					<Link className="about-btn primary" to="/projects">
						Explore My Work
					</Link>
				</section>
			</main>
			<Footer />
		</div>
	);
}
