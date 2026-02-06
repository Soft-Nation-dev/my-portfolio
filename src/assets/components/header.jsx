import React, { useEffect } from 'react';
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Header({ toggleTheme }) {
    
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
    
    return (
    <header>
          <Navbar toggleTheme={toggleTheme} />
    </header>
  );
}