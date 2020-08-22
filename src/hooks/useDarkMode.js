import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState('light');
  const setMode = mode => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  function themeToggler() {
    theme === 'light' ? setMode('dark') : setMode('light');
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('light');
  }, []);

  return [theme, themeToggler];
}
