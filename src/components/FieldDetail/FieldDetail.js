import React, { useContext, useEffect, useState } from "react";
import "./FieldDetail.css";
import { Header } from "../Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { RoleContext } from "../../services/role.context";
import API_URL from "../../constants/api";
import { jwtDecode } from "jwt-decode";

const FieldDetail = (props) => {
  const { name, location, image, description, sport, lockerRoom, bar, price } =
    props;

  const { id } = useParams();
  const navigate = useNavigate();
  const { role } = useContext(RoleContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedLocation, setEditedLocation] = useState(location);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedSport, setEditedSport] = useState(sport);
  const [editedLockerRoom, setEditedLockerRoom] = useState(lockerRoom);
  const [editedBar, setEditedBar] = useState(bar);
  const [editedPrice, setEditedPrice] = useState(price);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [field, setField] = useState({});

  const handleReserveClick = () => {
    setShowConfirmation(true);
  };

  ///////CREAR RESERVA

  const handleConfirmReservation = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/api/Reservation/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          Date: new Date().toISOString(),
          FieldId: id,
          // Otros datos necesarios para la reserva
        }),
      });

      if (response.ok) {
        console.log("Reserva exitosa");
      } else {
        console.error("Error al realizar la reserva");
      }

      setShowConfirmation(false);
    } catch (error) {
      console.error("Error al realizar la reserva:", error);
    }
  };

  const handleCancelReservation = () => {
    setShowConfirmation(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
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

  ////// GET 1 FIELD
  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${API_URL}/api/Field/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((fieldData) => {
        setField(fieldData);
        console.log(fieldData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // DELETE USER

  // const handleDeleteUser = async (userId) => {
  //   try {
  //     const token = localStorage.getItem("token");

  //     const response = await fetch(
  //       `${API_URL}/api/User/${userId}/delete-admin`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           Accept: "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       const updatedUsers = users.filter((user) => user.id !== userId);
  //       setUsers(updatedUsers);
  //     } else {
  //       console.log("Error al eliminar usuario:", await response.text());
  //     }
  //   } catch (error) {
  //     console.error("Error en la solicitud:", error);
  //   }
  // };

  let sportName = "";
  if (field.sport === 0) {
    sportName = "Fútbol";
  } else if (field.sport === 1) {
    sportName = "Vóley";
  } else if (field.sport === 2) {
    sportName = "Tenis";
  }

  return (
    <>
      <Header />

      <div className="field-detail field-card">
        <img src={image} alt={name} className="field-image" />
        <div className="field-info">
          <h2> {editedName}</h2>
          {isEditing ? (
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
            <div>
              <img src={field.image} alt={field.name} className="field-image" />
              <h2>{field.name}</h2>
              <p>
                <strong>Ubicación: {field.location}</strong> {editedLocation}
              </p>
              <p>
                <strong>Descripción: {field.description}</strong>{" "}
                {editedDescription}
              </p>
              <p>
                <strong>Deporte: {sportName}</strong> {editedSport}
              </p>
              <p>
                <strong>Vestuarios: {field.lockerRoom}</strong>{" "}
                {editedLockerRoom ? "Sí" : "No"}
              </p>
              <p>
                <strong>Bar: {field.bar}</strong> {editedBar ? "Sí" : "No"}
              </p>
              <p>
                <strong>Precio: $ {field.price}</strong> {editedPrice}
              </p>
              {role === "OWNER" ||
                (role === "ADMIN" && (
                  <button className="edit-button" onClick={handleEditClick}>
                    Editar
                  </button>
                ))}
              {role === "ADMIN" && (
                <button className="delete-button" onClick={handleEditClick}>
                  Eliminar
                </button>
              )}
              {role === "PLAYER" && (
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
