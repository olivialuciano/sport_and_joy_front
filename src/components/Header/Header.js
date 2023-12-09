import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { RoleContext } from "../../services/role.context";
import { jwtDecode } from "jwt-decode";
import API_URL from "../../constants/api";

import avatarImage from "../../assets/images/default_avatar.jpg";
// import { useUser } from "../../services/Authentication/authentication.context";

export const Header = () => {
  const { role } = useContext(RoleContext);
  console.log("Role:", role); // Agrega esto para depurar
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [userData, setUserData] = useState({});


  const imageUrl = image ? image : avatarImage;

  const buttonNavigateReservations = () => {
    navigate("/reservations");
  };
  //   const buttonNavigateUsers = () => {
  //     navigate("/users");
  // };
  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  const buttonNavigateProfile = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    // Limpiar el token del localStorage
  localStorage.removeItem("token");
    navigate("/signin");
  };

  useEffect(() => {
    // Obtén el userId directamente del token al iniciar sesión
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.sub;


        // Realiza la solicitud al servidor para obtener los datos del usuario
        fetch(`${API_URL}/api/User/get/${userId}`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((userData) => {
            console.log("Datos del usuario:", userData);
            setName(userData.firstName);
            setImage(userData.image);
            setUserData(userData);
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
    <div className="header">
      <button className="title-button" onClick={navigateDashboard}>
        Sport&Joy
      </button>
      {role === "ADMIN" ? (
        // Si el usuario es admin, mostrar el botón y el icono de usuario
        <div className="user">
          <img
            className="user-picture"
            src={imageUrl}
            alt="avatar"
            onClick={buttonNavigateProfile}
          />
          <button className="user-button" onClick={buttonNavigateProfile}>
            {name} 
          </button>
        </div>
      ) : role === "OWNER" ? (
        // Si el usuario no es admin, mostrar el menú desplegable
        <div className="dropdown">
          <div className="user">
            <img className="user-picture" 
            src={imageUrl}
             alt="avatar" />
            <button className="user-button">{name} </button>
          </div>
          <div className="dropdown-content">
            <button
              className="dropdown-buttons"
              onClick={buttonNavigateProfile}
            >
              Perfil
            </button>
            <button
              className="dropdown-buttons"
              onClick={navigateDashboard}
            >
              Mis Canchas
            </button>
            <button
              className="dropdown-buttons"
              onClick={buttonNavigateReservations}
            >
              Reservas
            </button>
            <button onClick={handleLogout} className="dropdown-buttons">
              Cerrar sesión
            </button>
          </div>
        </div>
      ) : (
        // Si el usuario no es admin, mostrar el menú desplegable
        <div className="dropdown">
          <div className="user">
            <img className="user-picture" 
            src={imageUrl}
             alt="avatar" />
            <button className="user-button">{name} </button>
          </div>
          <div className="dropdown-content">
            <button
              className="dropdown-buttons"
              onClick={buttonNavigateProfile}
            >
              Perfil
            </button>
            <button
              className="dropdown-buttons"
              onClick={buttonNavigateReservations}
            >
              Reservas
            </button>
            <button onClick={handleLogout} className="dropdown-buttons">
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>

  );
};
