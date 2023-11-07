import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Header } from "../Header/Header";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Juan");
  const [lastname, setLastname] = useState("Pérez");
  const [email, setEmail] = useState("juan.perez@gmail.com");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "lastname") {
      setLastname(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };

  return (
    <>
      <Header />
      <div className="perfil-container">
        <div className="perfil-header">
          <h1>Perfil de Usuario</h1>
        </div>
        <div className="perfil-datos">
          {isEditing ? (
            <div>
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  //value={nombre}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Apellido:</label>
                <input
                  type="text"
                  name="apellido"
                  //value={apellido}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  //value={email}
                  onChange={handleInputChange}
                />
              </div>
              <button onClick={handleSaveClick}>Guardar</button>
            </div>
          ) : (
            <div>
              <div>
                <label>Nombre:</label>
                {/* <span>{nombre}</span> */}
              </div>
              <div>
                <label>Apellido:</label>
                {/* <span>{apellido}</span> */}
              </div>
              <div>
                <label>Email:</label>
                {/* <span>{email}</span> */}
              </div>
              <button onClick={handleEditClick}>Editar</button>
            </div>
          )}
        </div>
      </div>
    </>
  );

  // const BACKEND_URL = "http://localhost:8080";

  // const [user, setUser] = useState("");
  // //switch viendo el path que se escpa de la url princpal es el usuario que este

  // useEffect(() => {
  //   fetch(BACKEND_URL + "/playerUser");
  // });
};

export default Profile;
