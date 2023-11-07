import React from "react";
import "./ReservationCard.css";

const ReservationCard = () => {
  return (
    <div className="reservation-card">
      <div className="reservation-details">
        <h3>cancha xd</h3>
        <p>Paraguay 1950</p>
        <p>31/05/2024</p>
      </div>
      <button className="cancel-button">Cancelar</button>
    </div>
  );
};

export default ReservationCard;
