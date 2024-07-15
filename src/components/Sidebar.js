import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Person, Settings, IntegrationInstructions, Receipt, AddCircle, Menu } from '@mui/icons-material';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <ul>
          <li>
            <Link to="/dashboard">
              <Home /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <Person /> <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <Settings /> <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/integrations">
              <IntegrationInstructions /> <span>Integrations</span>
            </Link>
          </li>
          <li>
            <Link to="/estimates">
              <Receipt /> <span>Estimates</span>
            </Link>
          </li>
          <li>
            <Link to="/start-estimate">
              <AddCircle /> <span>Start an Estimate</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`collapse-button ${collapsed ? 'collapsed' : ''}`} onClick={handleToggle}>
        <Menu />
      </div>
    </>
  );
};

export default Sidebar;
