import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

import avatarImage from "../../assets/images/default_avatar.jpg";
import { useUser } from "../../services/Authentication/authentication.context";

export const Header = () => {
  const navigate = useNavigate();
  const { user, updateUserRole } = useUser();

  // const [userRole, setUserRole] = useState("");

  // useEffect(() => {
  //   Simulando la obtención del rol desde el backend
  //   Aquí deberías hacer una llamada al backend para obtener el rol del usuario
  //   y luego establecerlo en el estado local.
  //   Por ahora, lo simularemos con un valor estático.
  //   setUserRole("admin");  //Puedes tener "player" u "owner" también
  // }, []);

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
      navigate("/profile")
    }
  

  const handleLogout = () => {
    // Realiza cualquier lógica de cierre de sesión que necesites
    // Por ahora, simplemente actualiza el rol y navega a /signin
    updateUserRole("");
    navigate("/signin");
  };

  return (
    //   <div className="header">
    //     <button className="title-button" onClick={navigateDashboard}>Sport&Joy</button>
    //     <div className="dropdown">
    //       <div className="user">
    //         <img className="user-picture" src={avatarImage} alt="avatar" />
    //         <button className="user-button">Olivia</button>
    //       </div>
    //       <div className="dropdown-content">
    //         <button className="dropdown-buttons" onClick={buttonNavigateProfile}>Perfil</button>
    //         <button className="dropdown-buttons" onClick={buttonNavigateReservations}>Reservas</button>
    //         <button className="dropdown-buttons">Cerrar sesión</button>
    //       </div>
    //     </div>
    //   </div>
    // );
    <div className="header">
      <button className="title-button" onClick={navigateDashboard}>
        Sport&Joy
      </button>
      {user.role === "admin" ? (
        // Si el usuario es admin, mostrar el botón y el icono de usuario
        <div className="user">
          <img
            className="user-picture"
            src={avatarImage}
            alt="avatar"
            onClick={buttonNavigateProfile}
          />
          <button className="user-button" onClick={buttonNavigateProfile}>
            Olivia
          </button>
        </div>
      ) : (
        // Si el usuario no es admin, mostrar el menú desplegable
        <div className="dropdown">
          <div className="user">
            <img className="user-picture" src={avatarImage} alt="avatar" />
            <button className="user-button">Olivia</button>
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
