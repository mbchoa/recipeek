import { useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const setMode = mode => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  function themeToggler() {
    theme === 'light' ? setMode('dark') : setMode('light');
  }

  return [theme, themeToggler];
}
