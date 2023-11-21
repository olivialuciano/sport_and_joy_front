import React from "react";
import { Header } from "../Header/Header";
import "./AdminView.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../services/Authentication/authentication.context";

// export default AdminView => {
//     const navigate = useNavigate();
//     const buttonNavigateUsers = () => {
//         navigate("/users");
//     };
//     const buttonNavigateReservations = () => {
//         navigate("/reservations");
//     };

//   return (
//     <>
//     < Header />
//         <div className='body'>
//             <button className="users-button" onClick={buttonNavigateUsers}>Usuarios Activos</button>
//             <button className="reservations-button" onClick={buttonNavigateReservations}>Reservas</button>

//         </div>
//     </>
//   )
// }

//NUEVO CON ROLES

const AdminView = () => {
  const { user } = useUser(); // Accede al contexto de usuario

  console.log("Role:", user.role); // Agrega esto para depurar
  const navigate = useNavigate();

  const buttonNavigateUsers = () => {
    navigate("/users");
  };

  const buttonNavigateReservations = () => {
    navigate("/reservations");
  };
  const buttonNavigateFields = () => {
    navigate("/allFields");
  };

  return (
    <>
      <Header />
      <div className="body">
        <button className="users-button" onClick={buttonNavigateUsers}>
          Usuarios Activos
        </button>
        <button
          className="reservations-button"
          onClick={buttonNavigateReservations}
        >
          Reservas
        </button>
        <button className="allFields-button" onClick={buttonNavigateFields}>
          Canchas activas
        </button>
      </div>
    </>
  );
};

export default AdminView;
