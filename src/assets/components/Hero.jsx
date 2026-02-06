import React from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/Hero.css';
import imgg from '../images/img3.jpeg';

export default function Hero() {
  return (
    <> 
   <section className="hero" style={{ backgroundImage: `url(${imgg})` }}>
     <div className="hero-backdrop" aria-hidden="true"></div>
     <div className="hero-content">
       <div className="hero-text">
            <h1 className='header-h1'>Hello, I’m <span className="highlight">Emmanuel</span></h1>
            <h2>
            <Typewriter
                options={{
                strings: ['Front-end Developer', 'React Enthusiast', 'Creative Coder','Deliver In Style, Quality And Record Time'],
                autoStart: true,
                loop: true,
                }}
            />
            </h2>
            <p className='max-width'>I’m passionate about bringing ideas to life through beautifully designed, interactive websites and apps. Every project I work on blends creativity, functionality, and responsiveness
              to create experiences that truly connect with users..</p>
          </div>
        </div>
      </section>
    </>
  );
}
