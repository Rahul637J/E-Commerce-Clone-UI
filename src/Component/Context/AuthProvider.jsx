import React, { createContext, useContext, useEffect, useState } from 'react'
import LoginRefresh from "../Auth/LoginRefresh";

const authContext = createContext({});

const AuthProvider = ({child}) => {
  
  const { validateAndRefresh } = LoginRefresh();
  const [auth, setAuth] = useState({
    userId: "",
    username: "",
    role: "CUSTOMER",
    isAuthenticated: false,
    accessExpiration: "",
    refreshExpiration: "",
  });

  const refresh = async () => {
    const user = await validateAndRefresh();
    console.log(user)
    if (user) {
      setAuth({ ...user });
    }
  };

  let isREfreshRequested = false;
  useEffect(() => {
    if(!isREfreshRequested)
    {
      isREfreshRequested = true;
      refresh();
    }
  }, []);

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {child}
    </authContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(authContext);
