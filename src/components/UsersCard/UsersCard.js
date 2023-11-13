import React from "react";
import "./UsersCard.css";

const UsersCard = () => {
  return (
    <div className="users-card">
      <div className="users-details">
        <h3>nombre</h3>
        <p>mail@trucho.com</p>
        <p>id:120198319031</p>
      </div>
      <button className="delete-button">Eliminar</button>
    </div>
  );
};

export default UsersCard;
