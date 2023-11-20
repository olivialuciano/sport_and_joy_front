// import React from "react";

// export const AuthenticationContext = createContext();
// const userValue = JSON.parse(localStorage.getItem("user"));

// export const AuthenticationContextProvider = ({ children }) => {
//   const [user, setUser] = useState(userValue);
//   const handleLogin = (email) => {
//     localStorage.setItem("user", JSON.stringify({ email }));
//     setUser({ email });
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthenticationContext.provider value={{ user, handleLogin, handleLogout }}>
//       {children}
//     </AuthenticationContext.provider>
//   );
// };


import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    role: "player", // Puedes inicializar el rol con un valor predeterminado
    // Otros datos del usuario
  });

  const updateUserRole = (newRole) => {
    setUser((prevUser) => ({ ...prevUser, role: newRole }));
  };

  return (
    <UserContext.Provider value={{ user, updateUserRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
