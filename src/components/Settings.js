import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './Settings.css';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="theme-toggle">
        <label htmlFor="theme-switch">Toggle Theme</label>
        <button id="theme-switch" onClick={toggleTheme}>
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </div>
    </div>
  );
};

export default Settings;
