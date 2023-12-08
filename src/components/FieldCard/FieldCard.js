import React from "react";
import "./FieldCard.css";

const FieldCard = ({ field, onCardClick }) => {
  const handleCardClick = () => {
    onCardClick(field);
  };
  let sport = "";
  if (field.sport === 0) {
    sport = "Fútbol";
  } else if (field.sport === 1) {
    sport = "Vóley";
  } else if (field.sport === 2) {
    sport = "Tenis";
  }
  return (
    <div className="tarjeta" onClick={handleCardClick}>
      <img className="imagen-field" src={field.image} alt={field.name} />
      <div className="info-field">
        <h2>{field.name}</h2>
        <p className="deporte">{sport}</p>
        <p className="ubicacion">{field.location}</p>
        <p className="precio"> $ {field.price}</p>
      </div>
    </div>
  );
};

export default FieldCard;
