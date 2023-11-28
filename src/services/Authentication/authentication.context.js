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
import jwt_decode from 'jsonwebtoken';


const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    role: "player", // Puedes inicializar el rol con un valor predeterminado
    // Otros datos del usuario
  });


  // const updateUserRole = (newRole) => {
  //   setUser((prevUser) => ({ ...prevUser, role: newRole }));
  // };

  useEffect(() => {
    // Al montar el componente, intentar obtener el token del almacenamiento local
    const token = localStorage.getItem('token');

    if (token) {
      try {
        // Decodificar el token y extraer el rol
        const decoded = jwt_decode(token);
        const newRole = decoded.role;

        // Actualizar el estado del usuario con el nuevo rol
        setUser((prevUser) => ({ ...prevUser, role: newRole }));
      } catch (error) {
        // Manejar errores al decodificar el token si es necesario
        console.error('Error al decodificar el token:', error);
      }
    }
  }, []); // Este efecto se ejecutará solo al montar el componente

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


//npm install jsonwebtoken INSTALAR