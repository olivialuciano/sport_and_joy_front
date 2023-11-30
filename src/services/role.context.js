import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const RoleContext = createContext();

export const RoleContextProvider = ({ children }) => {
  const [role, setRole] = useState("PLAYER");

  console.log("desde el context te digo el rol:", role);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

//observaciones: todo bien. pero llegás a recargar la página y el rol se pierde.

// Roles:
// ADMIN
// OWNER
// PLAYER
