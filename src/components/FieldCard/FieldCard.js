import React from "react";
import "./FieldCard.css";

const FieldCard = ({ cancha }) => {
  return (
    <div className="tarjeta">
      <img className="imagen-cancha" src={cancha.imagen} alt={cancha.nombre} />
      <div className="info-cancha">
        <h2>{cancha.nombre}</h2>
        <p className="ubicacion">{cancha.ubicacion}</p>
        <p className="precio">{cancha.precio}</p>
      </div>
    </div>
  );
};

export default FieldCard;