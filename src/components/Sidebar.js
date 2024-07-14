import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Person, Settings, IntegrationInstructions, Receipt, AddCircle } from '@mui/icons-material';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
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
  );
};

export default Sidebar;
