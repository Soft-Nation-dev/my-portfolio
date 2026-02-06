import React, { useEffect, useState } from 'react';
import AppRoutes from './Routes/AppRoutes';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <AppRoutes toggleTheme={toggleTheme} />
    </div>
  );
}