import React from "react";
import "./UsersCard.css";

const UsersCard = ({user}) => {

  console.log("User prop en UsersCard:", user);
  return (
    <div className="users-card">
      <div className="users-details">
        <h3>{user.firstName} {user.lastName}</h3>
        <p>{user.email}</p>
        <p> Id: {user.id}</p>
      </div>
      <button className="delete-button">Eliminar</button>
    </div>
  );
};

export default UsersCard;
