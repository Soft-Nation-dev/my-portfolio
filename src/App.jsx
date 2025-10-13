import React, { useEffect, useState } from 'react';
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import Skills from './assets/components/Skills';
import RecentProjects from './assets/components/Recentprojects';
import Footer from './assets/components/footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} />
      <Hero />
      <Skills />
      <RecentProjects />
      <Footer />
    </>
  );
}
