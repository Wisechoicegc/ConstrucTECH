import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    const mainUser = process.env.REACT_APP_MAIN_USER;
    const mainPassword = process.env.REACT_APP_MAIN_PASSWORD;

    if (email === mainUser && password === mainPassword) {
      setIsAuthenticated(true);
      return true;
    } else {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
