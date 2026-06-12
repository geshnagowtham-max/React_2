import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

// Custom hook for easier consumption
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Attach the theme class directly to a wrapper div */}
      <div className={`app-wrapper ${theme.toLowerCase()}-theme`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
