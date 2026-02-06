import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/homepage';
import ProjectsPage from '../pages/projects';
import AboutPage from '../pages/about';
import SkillsPage from '../pages/skills';
import ContactPage from '../pages/contact';
import TestimonialsPage from '../pages/testimonials';
// import LoginPage from '../pages/LoginPage';
// import Homepage from '../pages/Dashboard';
// import Messages from '../pages/messages';
// import RegisterForLsts from '../pages/registerforlsts';
// import SubmitPrayerRequest from '../pages/submitaprayerrequest';
// import LeadershipSurmit from '../pages/leadershipsurmit';
// import About from '../pages/about';
// import Contact from '../pages/contact';
// import Admin from '../pages/admin';

export default function AppRoutes({ toggleTheme }) {
  return (
    <Routes>
      <Route path="/" element={<LandingPage toggleTheme={toggleTheme} />} />
      <Route path="/projects" element={<ProjectsPage toggleTheme={toggleTheme} />} />
      <Route path="/about" element={<AboutPage toggleTheme={toggleTheme} />} />
      <Route path="/skills" element={<SkillsPage toggleTheme={toggleTheme} />} />
      <Route path="/contact" element={<ContactPage toggleTheme={toggleTheme} />} />
      <Route path="/testimonials" element={<TestimonialsPage toggleTheme={toggleTheme} />} />
      {/* <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Homepage />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/registerforlsts" element={<RegisterForLsts />} />
      <Route path="/submitaprayerrequest" element={<SubmitPrayerRequest />} />
      <Route path="/leadershipsurmit" element={<LeadershipSurmit />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} /> */}
    </Routes>
  );
}
