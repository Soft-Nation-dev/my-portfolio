import React from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <> 
    <section>
       <div className='hero'>
         <div className="hero-text">
            <h1>Hello, I’m <span className="highlight">Emmanuel</span></h1>
            <h2>
            <Typewriter
                options={{
                strings: ['Front-end Developer', 'React Enthusiast', 'Creative Coder','Deliver In Style, Quality And Record Time'],
                autoStart: true,
                loop: true,
                }}
            />
            </h2>
            <p>I build beautiful, functional, and responsive websites.</p>
       </div>
        </div>
        </section>
    </>
  );
}
