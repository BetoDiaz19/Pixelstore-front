import {
  createContext,
  useState,
  useEffect
} from "react";

import PropTypes from "prop-types";

export const AuthContext =
  createContext();

function AuthProvider({ children }) {

  const [user, setUser] =
    useState(null);

  useEffect(() => {

    const savedUser =
      localStorage.getItem("user");

    if (savedUser) {

      setUser(
        JSON.parse(savedUser)
      );

    }

  }, []);

  const login = (userData) => {

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    setUser(userData);

  };

  const logout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUser(null);

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthProvider;