import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, CogIcon, PuzzleIcon, ClipboardListIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { useMediaQuery } from 'react-responsive';
import './Sidebar.css';

const Sidebar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={`sidebar min-h-screen ${isMobile ? 'w-16' : 'w-64'} bg-gray-800 text-white flex flex-col`}>
      <ul className="flex flex-col flex-grow">
        <li className="p-4 hover:bg-gray-700">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <HomeIcon className="w-6 h-6" />
            {!isMobile && <span>Dashboard</span>}
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/profile" className="flex items-center space-x-2">
            <UserIcon className="w-6 h-6" />
            {!isMobile && <span>Profile</span>}
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/settings" className="flex items-center space-x-2">
            <CogIcon className="w-6 h-6" />
            {!isMobile && <span>Settings</span>}
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/integrations" className="flex items-center space-x-2">
            <PuzzleIcon className="w-6 h-6" />
            {!isMobile && <span>Integrations</span>}
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/estimates" className="flex items-center space-x-2">
            <ClipboardListIcon className="w-6 h-6" />
            {!isMobile && <span>Estimates</span>}
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/start-estimate" className="flex items-center space-x-2">
            <PlusCircleIcon className="w-6 h-6" />
            {!isMobile && <span>Start an Estimate</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
