import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { RoleContext } from "../../services/role.context";

// import avatarImage from "../../assets/images/default_avatar.jpg";
// import { useUser } from "../../services/Authentication/authentication.context";

export const Header = ({userName}) => {
  const { role } = useContext(RoleContext);
  console.log('nombreee', userName)
  console.log("Role:", role); // Agrega esto para depurar
  const navigate = useNavigate();

  const buttonNavigateReservations = () => {
    navigate("/reservations");
  };
  //   const buttonNavigateUsers = () => {
  //     navigate("/users");
  // };
  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  const buttonNavigateProfile = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    // Limpiar el token del localStorage
  localStorage.removeItem("token");
    navigate("/signin");
  };
  

  return (
    <div className="header">
      <button className="title-button" onClick={navigateDashboard}>
        Sport&Joy
      </button>
      {role === "ADMIN" ? (
        // Si el usuario es admin, mostrar el botón y el icono de usuario
        <div className="user">
          {/* <img
            className="user-picture"
            // src={avatarImage}
            alt="avatar"
            onClick={buttonNavigateProfile}
          /> */}
          <button className="user-button" onClick={buttonNavigateProfile}>
            {userName} vickyyy
          </button>
        </div>
      ) : (
        // Si el usuario no es admin, mostrar el menú desplegable
        <div className="dropdown">
          <div className="user">
            {/* <img className="user-picture" 
            src={avatarImage}
             alt="avatar" /> */}
            <button className="user-button">{userName} vickyyy </button>
          </div>
          <div className="dropdown-content">
            <button
              className="dropdown-buttons"
              onClick={buttonNavigateProfile}
            >
              Perfil
            </button>
            <button
              className="dropdown-buttons"
              onClick={buttonNavigateReservations}
            >
              Reservas
            </button>
            <button onClick={handleLogout} className="dropdown-buttons">
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>

  );
};
