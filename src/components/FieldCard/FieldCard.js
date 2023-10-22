import React from "react";
import "./FieldCard.css";

export const FieldCard = () => {
  return (
    <>
      <div className="card">
        <img src="../../assets/images/canchaDefault.png" alt="Imagen" />
        <p>Nombre</p>
        <p>Dirección</p>
        <p>Precio</p>
      </div>
    </>
  );
};
