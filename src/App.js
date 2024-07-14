import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Integrations from './components/Integrations';
import Estimates from './components/Estimates';
import StartEstimate from './components/StartEstimate';
import Analytics from './components/Analytics';

const App = () => {
  return (
    <Router basename="/ConstrucTECH">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
        <Route path="/integrations" element={<DashboardLayout><Integrations /></DashboardLayout>} />
        <Route path="/estimates" element={<DashboardLayout><Estimates /></DashboardLayout>} />
        <Route path="/start-estimate" element={<DashboardLayout><StartEstimate /></DashboardLayout>} />
        <Route path="/analytics" element={<DashboardLayout><Analytics /></DashboardLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
