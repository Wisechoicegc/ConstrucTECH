import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Person, Settings, IntegrationInstructions, Receipt, AddCircle, Menu } from '@mui/icons-material';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        <Menu />
      </button>
      {isOpen && (
        <div>
          <div className="logo">
            <h2>Logo</h2>
          </div>
          <ul>
            <li>
              <Link to="/dashboard">
                <Home /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <Person /> Profile
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <Settings /> Settings
              </Link>
            </li>
            <li>
              <Link to="/integrations">
                <IntegrationInstructions /> Integrations
              </Link>
            </li>
            <li>
              <Link to="/estimates">
                <Receipt /> Estimates
              </Link>
            </li>
            <li>
              <Link to="/start-estimate">
                <AddCircle /> Start an Estimate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
