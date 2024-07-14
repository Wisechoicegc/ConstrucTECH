import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext'; // Ensure this path is correct
import Sidebar from './components/Sidebar';
import Analytics from './components/Analytics';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Integrations from './components/Integrations';
import Estimates from './components/Estimates';
import StartEstimate from './components/StartEstimate';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <AuthContext.Consumer>
            {({ isAuthenticated }) => (
              <>
                {isAuthenticated && <Sidebar />}
                <div className="main-content">
                  <Routes>
                    <Route path="/" element={<Login />} />
                    {isAuthenticated ? (
                      <>
                        <Route path="/dashboard" element={<Analytics />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/integrations" element={<Integrations />} />
                        <Route path="/estimates" element={<Estimates />} />
                        <Route path="/start-estimate" element={<StartEstimate />} />
                      </>
                    ) : (
                      <Route path="*" element={<Navigate to="/" />} />
                    )}
                  </Routes>
                </div>
              </>
            )}
          </AuthContext.Consumer>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
