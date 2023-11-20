import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

import avatarImage from "../../assets/images/default_avatar.jpg";
import { useUser } from "../../services/Authentication/authentication.context";

export const Header = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  // const [userRole, setUserRole] = useState("");

  // useEffect(() => {
  //   Simulando la obtención del rol desde el backend
  //   Aquí deberías hacer una llamada al backend para obtener el rol del usuario
  //   y luego establecerlo en el estado local.
  //   Por ahora, lo simularemos con un valor estático.
  //   setUserRole("admin");  //Puedes tener "player" u "owner" también
  // }, []);


  const buttonNavigateProfile = () => {
    navigate("/profile");
  };
  const buttonNavigateReservations = () => {
    navigate("/reservations");
  };
  const buttonNavigateAdminView = () => {
    navigate("/adminview");
  };
//   const buttonNavigateUsers = () => {
//     navigate("/users");
// };
  const navigateDashboard = () => {
    navigate("/dashboard");
  };



  return (
    <div className="header">
      <button className="title-button" onClick={navigateDashboard}>Sport&Joy</button>
      {/* <div className="adminView">
        <button className="adminView-button" onClick={buttonNavigateAdminView}><span>AdminView</span></button>
      </div> */}
      <div className="dropdown">
        <div className="user">
          <img className="user-picture" src={avatarImage} alt="avatar" />
          <button className="user-button">Olivia</button>
        </div>
        <div className="dropdown-content">
          <button className="dropdown-buttons" onClick={buttonNavigateProfile}>Perfil</button>
          <button className="dropdown-buttons" onClick={buttonNavigateReservations}>Reservas</button>
          <button className="dropdown-buttons">Cerrar sesión</button>
        </div>
      </div>
    </div>
  );

    //INTENTO DE MANEJO DE ROLES
    // <div className="header">
    //   <button className="title-button" onClick={navigateDashboard}>
    //     Sport&Joy
    //   </button>
    //   {userRole === "admin" && (
    //     <div className="adminView">
    //       <button className="adminView-button" onClick={buttonNavigateAdminView}>
    //         <span>AdminView</span>
    //       </button>
    //     </div>
    //   )}
    //   <div className="dropdown">
    //     <div className="user">
    //       <img className="user-picture" src={avatarImage} alt="avatar" />
    //       <button className="user-button">Olivia</button>
    //     </div>
    //     <div className="dropdown-content">
    //       <button className="dropdown-buttons" onClick={buttonNavigateProfile}>
    //         Perfil
    //       </button>
    //       <button
    //         className="dropdown-buttons"
    //         onClick={buttonNavigateReservations}
    //       >
    //         Reservas
    //       </button>
    //       <button className="dropdown-buttons" onClick={buttonNavigateUsers}>
    //         Cerrar sesión
    //       </button>
    //     </div>
    //   </div>
    // </div>

    //2do intento 
  //   <div className="header">
  //   <button className="title-button" onClick={navigateDashboard}>
  //     Sport&Joy
  //   </button>
  //   {user.role === "admin" ? (
    
  //     <div className="adminView">
  //       <button className="adminView-button" onClick={buttonNavigateAdminView}>
  //         <span>AdminView</span>
  //       </button>
  //     </div>
  //   ) : (
 
  //     <div className="dropdown">
  //       <div className="user">
  //         <img className="user-picture" src={avatarImage} alt="avatar" />
  //         <button className="user-button">Olivia</button>
  //       </div>
  //       <div className="dropdown-content">
  //         <button className="dropdown-buttons" onClick={buttonNavigateProfile}>
  //           Perfil
  //         </button>
  //         <button className="dropdown-buttons" onClick={buttonNavigateReservations}>
  //           Reservas
  //         </button>
  //         <button className="dropdown-buttons">Cerrar sesión</button>
  //       </div>
  //     </div>
  //   )}
  // </div>

//3er intento 

/*{ <div className="header">
      {user.role === "admin" && (
        <button className="admin-button" onClick={buttonNavigateAdminView}>
          Admin View
        </button>
      )}

      {user.role === "player" && (
        <>
          {}
          <button className="player-button" onClick={navigateDashboard}>
            Dashboard
          </button>
          {}
        </>
      )}

      {}
      <div className="dropdown">
        <div className="user">
          <img className="user-picture" src={avatarImage} alt="avatar" />
          <button className="user-button">Olivia</button>
        </div>
        <div className="dropdown-content">
          <button className="dropdown-buttons" onClick={buttonNavigateProfile}>
            Perfil
          </button>
          <button className="dropdown-buttons" onClick={buttonNavigateReservations}>
            Reservas
          </button>
          <button className="dropdown-buttons">Cerrar sesión</button>
        </div>
      </div>
    </div>
  ); }*/

      };