import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios'


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for the presence of authentication token in storage
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      
      // Fetch user details using the token (you need an endpoint for this in your backend)
      fetchUserDetails(token);
    }
  }, []);

  const fetchUserDetails = async (token) => {
    try {
      const response = await axios.get('http://localhost:4000/api/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setUser(response.data.user);
    } catch (error) {
      // If there's an error fetching user details, you may want to handle it accordingly
      console.error('Error fetching user details:', error);
      // Optionally, you can set user to null to clear any previous user data
      setUser(null);
    }
  };
  

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Remove authentication token and user information from storage on logout
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUser(null);
  };


  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
