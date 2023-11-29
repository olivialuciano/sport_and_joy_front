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

import { createContext, useContext, useEffect, useState } from "react";
import { useJwt } from "react-jwt";



const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    role: "", // Puedes inicializar el rol con un valor predeterminado
    // Otros datos del usuario
  });


  const { decodedToken } = useJwt(); // No es necesario pasar el token, useJwt lo extraerá automáticamente del almacenamiento local

  useEffect(() => {
    if (decodedToken) {
      try {
        console.log('Decoded Token:', decodedToken);
  
        // Extraer el rol del token decodificado
        const newRole = decodedToken.role;
  
        // Actualizar el estado del usuario con el nuevo rol
        setUser((prevUser) => ({ ...prevUser, role: newRole }));
      } catch (error) {
        // Manejar errores al extraer el rol si es necesario
        console.error('Error al extraer el rol del token:', error);
      }
    }
  }, [decodedToken]);
  

  const updateUserRole = (newRole) => {
    setUser((prevUser) => ({ ...prevUser, role: newRole }));
  };


  

  return (
    <UserContext.Provider value={{ user, updateUserRole  }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};


//npm install react-jwt
