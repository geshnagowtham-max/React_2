import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="task-container center-content theme-panel">
      <h2>Theme Switcher</h2>
      <div className="card">
        <p>Current Theme: <strong>{theme}</strong></p>
        <button className="btn-primary" onClick={toggleTheme}>
          Switch to {theme === 'Light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </section>
  );
};

export default ThemeSwitcher;
