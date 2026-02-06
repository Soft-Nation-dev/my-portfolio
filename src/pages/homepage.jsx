import React from 'react';
import Header from '../../src/assets/components/header';
import Hero from '../../src/assets/components/Hero';
import Skills from '../../src/assets/components/Skills';
import RecentProjects from '../../src/assets/components/Recentprojects';
import Footer from '../../src/assets/components/footer';


export default function App({ toggleTheme }) {


  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <Hero />
      <Skills />
      <RecentProjects />
      <Footer />
    </>
  );
}
 