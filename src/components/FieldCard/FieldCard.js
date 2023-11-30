import React from "react";
import "./FieldCard.css";

const FieldCard = ({ field, onCardClick }) => {
  const handleCardClick = () => {
    onCardClick(field);
  };
  return (
    <div className="tarjeta" onClick={handleCardClick}>
      <img className="imagen-field" src={field.image} alt={field.name} />
      <div className="info-field">
        <h2>{field.name}</h2>
        <p className="ubicacion">{field.location}</p>
        {/* <p className="precio">{field.Price}</p> */}
      </div>
    </div>
  );
};

export default FieldCard;
