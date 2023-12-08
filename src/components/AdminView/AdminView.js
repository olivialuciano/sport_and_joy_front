import React, { useContext } from "react";
import { Header } from "../Header/Header";
import "./AdminView.css";
import { useNavigate } from "react-router-dom";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import { RoleContext } from "../../services/role.context";
import NotFound from "../NotFound/NotFound";
import API_URL from "../../constants/api";
import { Button } from "react-bootstrap";

const AdminView = () => {
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

  const handleDownloadPdf1 = () => {
    fetch(API_URL + "/api/Reports/players-with-reservations", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al descargar el informe");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Informe.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleDownloadPdf2 = () => {
    fetch(API_URL + "/api/Reports/owners-with-fields", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al descargar el informe");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Informe.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
        <section>
          <h1>Informes</h1>
          <h3>
            Informe de usuarios jugadores que hicieron al menos una reserva
          </h3>
          <button onClick={handleDownloadPdf1}>descargar pdf</button>
          <h3>Informe de usuarios dueños que tienen al menos una cancha</h3>
          <button onClick={handleDownloadPdf2}>descargar pdf</button>
          <h3>Informe de todas las reservas que se hicieron en un período</h3>
        </section>
      </>
    );
  } else {
    return <h1>No tenés permisos suficientes para ver esta página...</h1>;
  }
};

export default AdminView;
