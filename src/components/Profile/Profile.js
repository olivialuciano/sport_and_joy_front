import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { Header } from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { RoleContext } from "../../services/role.context";
import { jwtDecode } from "jwt-decode";
import API_URL from "../../constants/api";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // const { user, updateUserRole } = useUser();
  const { role } = useContext(RoleContext);

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
  const handleLogout = () => {
    // Realiza cualquier lógica de cierre de sesión que necesites
    // Por ahora, simplemente actualiza el rol y navega a /signin
    // updateUserRole('');
    navigate("/signin");
  };

  useEffect(() => {
    // Obtén el userId directamente del token al iniciar sesión
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.sub;
        const { given_name, family_name } = decodedToken;


        // Realiza la solicitud al servidor para obtener los datos del usuario
        fetch(`${API_URL}/api/User/get/${userId}`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((userData) => {
            setName(given_name);
            setLastname(family_name);
            setEmail(userData.email);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    }
  }, []); // Asegúrate de que este sea un arreglo vacío

  return (
    <>
      <Header />
      <div className="perfil-container">
        <div className="perfil-header">
          <h1>Mi perfil</h1>
        </div>
        <div className="perfil-datos">
          {isEditing ? (
            <div>
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Apellido:</label>
                <input
                  type="text"
                  name="apellido"
                  value={lastname}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <button onClick={handleSaveClick}>Guardar</button>
            </div>
          ) : (
            <div>
              <div>
                <label>Nombre:</label>
                { <span>{name}</span> }
              </div>
              <div>
                <label>Apellido:</label>
                { <span>{lastname}</span> }
              </div>
              <div>
                <label>Email:</label>
                { <span>{email}</span> }
              </div>
              <button onClick={handleEditClick}>Editar</button>
              {role === "ADMIN" && (
                <button onClick={handleLogout}>Cerrar sesión</button>
              )}
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
