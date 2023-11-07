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
  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="header">
      <h1 onClick={navigateDashboard}>Sport&Joy</h1>
      <div className="dropdown">
        <div className="user">
          <img className="user-picture" src={avatarImage} alt="avatar" />
          <p className="user-name">Olivia</p>
        </div>
        <div className="dropdown-content">
          <p onClick={buttonNavigateProfile}>Perfil</p>
          <p onClick={buttonNavigateReservations}>Reservas</p>
          <p>Cerrar sesión</p>
        </div>
      </div>
    </div>
  );
};
