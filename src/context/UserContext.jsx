import React, { createContext, useState } from 'react';

// Create the context
export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  // State for user data
  const [user, setUser] = useState({
    fullName: {
      firstName: '',
      lastName: '',
    },
    email: '',
  });

  return (
    //setUser check
    <UserDataContext.Provider value={{ user, setUser }}> 
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
