import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.warn('useTheme must be used within a ThemeProvider, returning default values');
    return {
      isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
      toggleTheme: () => console.warn('toggleTheme called outside ThemeProvider'),
      setTheme: () => console.warn('setTheme called outside ThemeProvider')
    };
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Prevent multiple rapid clicks
  const [isToggling, setIsToggling] = useState(false);

  useEffect(() => {
    // Apply theme on mount and when it changes
    const applyTheme = () => {
      try {
        if (isDarkMode) {
          document.documentElement.setAttribute('data-theme', 'dark');
          document.body.style.backgroundColor = '#0f172a';
          document.body.style.setProperty('background-color', '#0f172a', 'important');
          // Ensure all styled components can detect the theme
          document.body.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.removeAttribute('data-theme');
          document.body.style.backgroundColor = '#ffffff';
          document.body.style.setProperty('background-color', '#ffffff', 'important');
          // Ensure all styled components can detect the theme
          document.body.removeAttribute('data-theme');
        }
      } catch (error) {
        console.error('Error applying theme:', error);
      }
    };

    applyTheme();
    
    // Save to localStorage
    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    } catch (error) {
      console.error('Error saving theme to localStorage:', error);
    }
  }, [isDarkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Only change if user hasn't explicitly set a preference
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    // Prevent multiple rapid clicks
    if (isToggling) return;
    
    setIsToggling(true);
    setIsDarkMode(prev => !prev);
    
    // Reset the toggle flag after a short delay
    setTimeout(() => {
      setIsToggling(false);
    }, 100);
  };

  const setTheme = (theme) => {
    setIsDarkMode(theme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
