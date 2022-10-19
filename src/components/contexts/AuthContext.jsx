import React, { useContext, useState } from "react";

const AuthContex = React.createContext();

export function useAuth(params) {
  return useContext(AuthContex);
}

export function AuthContext({ children }) {
    const [currentUser, setCurrentUser] =useState();
    
  const value = {
    currentUser,
  };
  return <AuthContex.Provider value={value}>{children}</AuthContex.Provider>;
}
