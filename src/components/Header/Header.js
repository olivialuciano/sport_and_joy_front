import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

import avatarImage from "../../assets/images/default_avatar.jpg";

export const Header = () => {
  const navigate = useNavigate();
  const buttonNavigateProfile = () => {
    navigate("/profile");
  };
  const buttonNavigateReservations = () => {
    navigate("/reservations");
  };
  const buttonNavigateUsers = () => {
    navigate("/users");
  };
  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="header">
      <button className="title-button" onClick={navigateDashboard}>Sport&Joy</button>
      <div className="dropdown">
        <div className="user">
          <img className="user-picture" src={avatarImage} alt="avatar" />
          <button className="user-button">Olivia</button>
        </div>
        <div className="dropdown-content">
          <button className="dropdown-buttons" onClick={buttonNavigateProfile}>Perfil</button>
          <button className="dropdown-buttons" onClick={buttonNavigateReservations}>Reservas</button>
          <button className="dropdown-buttons" onClick={buttonNavigateUsers}>Usuarios Activos</button>
          <button className="dropdown-buttons">Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};
