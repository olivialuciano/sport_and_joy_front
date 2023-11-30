import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const RoleContext = createContext();

export const RoleContextProvider = ({ children }) => {
  const [role, setRole] = useState("PLAYER");
  const [token, setToken] = useState("");

  console.log("desde el context te digo el rol:", role);
  console.log("desde el context te digo el token:", token);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, [setRole]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [setToken]);

  return (
    <RoleContext.Provider value={{ role, setRole, token, setToken }}>
      {children}
    </RoleContext.Provider>
  );
};

//observaciones: todo bien. pero llegás a recargar la página y el rol se pierde.

// Roles:
// ADMIN
// OWNER
// PLAYER
