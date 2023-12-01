import React from "react";
import "./ReservationCard.css";

const ReservationCard = ({reservation}) => {
  console.log("User prop en ReservationCard:", reservation);
  return (
    <div className="reservation-card">
      <div className="reservation-details">
        <h3>Cancha: {reservation.fieldId}</h3>
        <p>Ubicacion:{reservation.location}</p>
        <p>Del dia: {reservation.date}</p>
      </div>
      <button className="cancel-button">Cancelar</button>
    </div>
  );
};

export default ReservationCard;
