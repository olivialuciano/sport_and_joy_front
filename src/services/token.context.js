// import React, { useEffect } from "react";
// import { useState } from "react";
// import { createContext } from "react";

// export const TokenContext = createContext();

// export const TokenContextProvider = ({ children }) => {
//   const [token, setToken] = useState("");

//   console.log("desde el context te digo el token:", token);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setRole(storedToken);
//     }
//   }, [setToken]);

//   return (
//     <RoleContext.Provider value={{ token, setToken }}>
//       {children}
//     </RoleContext.Provider>
//   );
// };
