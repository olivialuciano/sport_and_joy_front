import React, { useState } from "react";
import "./FieldDetail.css";
import { Header } from "../Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../services/Authentication/authentication.context";

const FieldDetail = (props) => {
  const { name, location, image, description, sport, lockerRoom, bar, price } =
    props;

  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);

  const [editedName, setEditedName] = useState(name);
  const [editedLocation, setEditedLocation] = useState(location);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedSport, setEditedSport] = useState(sport);
  const [editedLockerRoom, setEditedLockerRoom] = useState(lockerRoom);
  const [editedBar, setEditedBar] = useState(bar);
  const [editedPrice, setEditedPrice] = useState(price);

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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Aquí puedes agregar la lógica para guardar los cambios
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado según el campo que esté siendo editado
    switch (name) {
      case "name":
        setEditedName(value);
        break;
      case "location":
        setEditedLocation(value);
        break;
      case "description":
        setEditedDescription(value);
        break;
      case "sport":
        setEditedSport(value);
        break;
      case "lockerRoom":
        setEditedLockerRoom(value);
        break;
      case "bar":
        setEditedBar(value);
        break;
      case "price":
        setEditedPrice(value);
        break;
      default:
        break;
    }
  };

  return (
    // <>
    // <Header />
    // <div className="field-detail field-card">
    //   <img src={image} alt={name} className="field-image" />
    //   <div className="field-info">
    //     <h2> "Fulbito" {name}</h2>
    //     <img src="https://lh3.googleusercontent.com/p/AF1QipMxtsQ0kqDdux6pRQCFKd61np6gDpx44KFx4UTq=w1080-h608-p-no-v0" alt="foto cancha"/>
    //     <p><strong>Ubicación: "Sarmiento 5667"</strong> {location}</p>
    //     <p><strong>Descripción: "cancha f5"</strong> {description}</p>
    //     <p><strong>Deporte: "Futbol"</strong> {sport}</p>
    //     <p><strong>Vestuarios: {true} </strong> {lockerRoom ? "Sí" : "No"}</p>
    //     <p><strong>Bar: {false}</strong> {bar ? "Sí" : "No"}</p>
    //     <p><strong>Precio: {30}</strong> {price} USD</p>
    //     <button className="reserve-button" onClick={handleReserveClick}>Reservar</button>
    //   </div>

    //   {showConfirmation && (
    //     <div className="popup">
    //       <p>¿Seguro que desea reservar?</p>
    //       <button onClick={handleConfirmReservation}>Sí</button>
    //       <button onClick={handleCancelReservation}>No</button>
    //     </div>
    //   )}
    // </div>
    // </>

    // con boton editar y poder editar

    <>
      <Header />
      <div className="field-detail field-card">
        <img src={image} alt={name} className="field-image" />
        <div className="field-info">
          <h2>{editedName}</h2>
          {isEditing ? (
            // Mostrar campos de entrada durante la edición
            <div>
              <label>Ubicación:</label>
              <input
                type="text"
                name="location"
                value={editedLocation}
                onChange={handleInputChange}
              />
              <label>Descripción:</label>
              <input
                type="text"
                name="description"
                value={editedDescription}
                onChange={handleInputChange}
              />
              <label>Deporte:</label>
              <input
                type="text"
                name="sport"
                value={editedSport}
                onChange={handleInputChange}
              />
              <label>Vestuarios:</label>
              <input
                type="text"
                name="lockerRoom"
                value={editedLockerRoom}
                onChange={handleInputChange}
              />
              <label>Bar:</label>
              <input
                type="text"
                name="bar"
                value={editedBar}
                onChange={handleInputChange}
              />
              <label>Precio:</label>
              <input
                type="text"
                name="price"
                value={editedPrice}
                onChange={handleInputChange}
              />
              <button onClick={handleSaveClick}>Guardar</button>
            </div>
          ) : (
            // Mostrar información normal si no está en modo de edición
            <div>
              <p>
                <strong>Ubicación:</strong> {editedLocation}
              </p>
              <p>
                <strong>Descripción:</strong> {editedDescription}
              </p>
              <p>
                <strong>Deporte:</strong> {editedSport}
              </p>
              <p>
                <strong>Vestuarios:</strong> {editedLockerRoom ? "Sí" : "No"}
              </p>
              <p>
                <strong>Bar:</strong> {editedBar ? "Sí" : "No"}
              </p>
              <p>
                <strong>Precio:</strong> {editedPrice} USD
              </p>
              {/* Mostrar el botón de edición solo si el rol es "owner" */}
              {user.role === "owner" && (
                <button className="edit-button" onClick={handleEditClick}>
                  Editar
                </button>
              )}
              {/* Mostrar el botón de reserva solo si el rol no es "owner" */}
              {user.role !== "owner" && (
                <button className="reserve-button" onClick={handleReserveClick}>
                  Reservar
                </button>
              )}
              {showConfirmation && (
                <div className="popup">
                  <p>¿Seguro que desea reservar?</p>
                  <button onClick={handleConfirmReservation}>Sí</button>
                  <button onClick={handleCancelReservation}>No</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FieldDetail;
