import React, { useContext, useEffect, useState } from "react";
import ReservationCard from "../ReservationCard/ReservationCard";
import { Header } from "../Header/Header";
import "./Reservations.css";
import { Search } from "../Search/Search";
import { RoleContext } from "../../services/role.context";
import API_URL from "../../constants/api";
import { jwtDecode } from "jwt-decode";

const Reservations = () => {
  // return (
  //   <>
  //     <Header />
  //     <h1>Mis Reservas</h1>
  //     <Search />
  //     <div className="container">
  //       <ReservationCard />
  //       <ReservationCard />
  //       <ReservationCard />
  //       <ReservationCard />
  //       <ReservationCard />
  //       <ReservationCard />
  //       <ReservationCard />
  //       <ReservationCard />
  //       <ReservationCard />
  //       <ReservationCard />
  //       <ReservationCard />
  //       <ReservationCard />
  //     </div>
  //   </>
  // );
  // const { user } = useUser();
  const { role } = useContext(RoleContext);
  const [reservations, setReservations] = useState([]);

  // useEffect(() => {
  //   // Lógica para obtener las reservaciones desde el backend
  //   if (role === "ADMIN") {
  //     fetch(`${API_URL}/api/Reservation/getall`, {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setReservations(data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching reservations:", error);
  //       });
  //   } else {
  //   }
  // }, [role]);

  //para traer las de player tmb
  
  useEffect(() => {
    // Lógica para obtener las reservaciones desde el backend
    if (role === "ADMIN") {
      fetch(`${API_URL}/api/Reservation/getall`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setReservations(data);
        })
        .catch((error) => {
          console.error("Error fetching reservations:", error);
        });
    } else if (role === "PLAYER") {
      // Obtener el ID del usuario directamente del token al iniciar sesión
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.sub;

          // Hacer la solicitud al endpoint específico para obtener las reservaciones del jugador
          fetch(`${API_URL}/api/Reservation/${userId}`, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Player reservations:", data);
            setReservations(data ? [data] : []); // Coloca la reserva del PLAYER en un array para que funcione con map
            })
            .catch((error) => {
              console.error("Error fetching player reservations:", error);
            });
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    }
  }, [role]);


  return (
    <>
      <Header />
      <h1>{role === "ADMIN" ? "Todas las Reservas" : "Mis Reservas"}</h1>
      <Search />
      <div className="container">
        {Array.isArray(reservations) && reservations.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />
        ))}
      </div>
    </>
  );
};

export default Reservations;
