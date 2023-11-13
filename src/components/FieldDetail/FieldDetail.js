// import React, { useState } from "react";
// import { FieldCard } from "../FieldCard/FieldCard";

// export const FieldDetail = ({
//   name,
//   location,
//   image,
//   description,
//   sport,
//   lockerRoom,
//   bar,
//   price,
// }) => {
  // const [fieldName, setFieldName] = useState(name);
  // el owner o admin debe poder editar cancha, puede ser que el boton editar haga que se convierta en inputs el html.

//   return <></>;
// };

// <img src={image} />
// <h2>{name}</h2>
// <h3>{location}</h3>
// <p>{description}</p>
// <p>{sport}</p>
// <p>{lockerRoom}</p>
// <p>{bar}</p>
// <p>{price}</p>


//NUEVO

// import React from "react";
// import "./FieldDetail.css";

// const FieldDetail = (props) => {
//   const {
//     name,
//     location,
//     image,
//     description,
//     sport,
//     lockerRoom,
//     bar,
//     price,
//   } = props;

//   return (
//     <div className="field-detail field-card">
//       <img src={image} alt={name} className="field-image" />
//       <div className="field-info">
//         <h2>{name}</h2>
//         <p><strong>Ubicación:</strong> {location}</p>
//         <p><strong>Descripción:</strong> {description}</p>
//         <p><strong>Deporte:</strong> {sport}</p>
//         <p><strong>Vestuarios:</strong> {lockerRoom ? "Sí" : "No"}</p>
//         <p><strong>Bar:</strong> {bar ? "Sí" : "No"}</p>
//         <p><strong>Precio:</strong> {price} USD</p>
//       </div>
//     </div>
//   );
// };

// export default FieldDetail;


import React, { useState } from "react";
import "./FieldDetail.css";
import { Header } from "../Header/Header";

const FieldDetail = (props) => {
  const {
    name,
    location,
    image,
    description,
    sport,
    lockerRoom,
    bar,
    price,
  } = props;

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleReserveClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmReservation = () => {
    // Aquí puedes agregar la lógica para realizar la reserva
    setShowConfirmation(false);
  };

  const handleCancelReservation = () => {
    setShowConfirmation(false);
  };

  return (
    <>
    <Header />
    <div className="field-detail field-card">
      <img src={image} alt={name} className="field-image" />
      <div className="field-info">
        <h2> "Fulbito" {name}</h2>
        <img src="https://lh3.googleusercontent.com/p/AF1QipMxtsQ0kqDdux6pRQCFKd61np6gDpx44KFx4UTq=w1080-h608-p-no-v0" alt="foto cancha"/>
        <p><strong>Ubicación: "Sarmiento 5667"</strong> {location}</p>
        <p><strong>Descripción: "cancha f5"</strong> {description}</p>
        <p><strong>Deporte: "Futbol"</strong> {sport}</p>
        <p><strong>Vestuarios: {true} </strong> {lockerRoom ? "Sí" : "No"}</p>
        <p><strong>Bar: {false}</strong> {bar ? "Sí" : "No"}</p>
        <p><strong>Precio: {30}</strong> {price} USD</p>
        <button onClick={handleReserveClick}>Reservar</button>
      </div>

      {showConfirmation && (
        <div className="popup">
          <p>¿Seguro que desea reservar?</p>
          <button onClick={handleConfirmReservation}>Sí</button>
          <button onClick={handleCancelReservation}>No</button>
        </div>
      )}
    </div>
    </>
  );
};

export default FieldDetail;




