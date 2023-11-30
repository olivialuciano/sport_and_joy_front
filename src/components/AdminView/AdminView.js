import React, { useContext } from "react";
import { Header } from "../Header/Header";
import "./AdminView.css";
import { useNavigate } from "react-router-dom";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import { RoleContext } from "../../services/role.context";
import NotFound from "../NotFound/NotFound";

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
  // const { user } = useUser(); // Accede al contexto de usuario
  const { role } = useContext(RoleContext);

  console.log("Role:", role);
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

  if (role === "ADMIN") {
    return (
      <>
        <Header />
        <ToggleTheme />
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
  } else {
    return <h1>No tenés permisos suficientes para ver esta página...</h1>;
  }
};

export default AdminView;
