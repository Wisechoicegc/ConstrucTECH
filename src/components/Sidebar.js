import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, CogIcon, ChartBarIcon, DocumentTextIcon, PlusCircleIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-gray-800 text-white h-full ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <h2 className="text-2xl font-bold">Logo</h2>}
        <button
          onClick={handleCollapseToggle}
          className="focus:outline-none"
        >
          <svg
            className={`w-6 h-6 transform transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <ul className="space-y-2">
        <li>
          <Link to="/dashboard" className="flex items-center p-2 hover:bg-gray-700">
            <HomeIcon className="h-6 w-6" />
            {!isCollapsed && <span className="ml-3">Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link to="/profile" className="flex items-center p-2 hover:bg-gray-700">
            <UserIcon className="h-6 w-6" />
            {!isCollapsed && <span className="ml-3">Profile</span>}
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex items-center p-2 hover:bg-gray-700">
            <CogIcon className="h-6 w-6" />
            {!isCollapsed && <span className="ml-3">Settings</span>}
          </Link>
        </li>
        <li>
          <Link to="/integrations" className="flex items-center p-2 hover:bg-gray-700">
            <ChartBarIcon className="h-6 w-6" />
            {!isCollapsed && <span className="ml-3">Integrations</span>}
          </Link>
        </li>
        <li>
          <Link to="/estimates" className="flex items-center p-2 hover:bg-gray-700">
            <DocumentTextIcon className="h-6 w-6" />
            {!isCollapsed && <span className="ml-3">Estimates</span>}
          </Link>
        </li>
        <li>
          <Link to="/start-estimate" className="flex items-center p-2 hover:bg-gray-700">
            <PlusCircleIcon className="h-6 w-6" />
            {!isCollapsed && <span className="ml-3">Start an Estimate</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
