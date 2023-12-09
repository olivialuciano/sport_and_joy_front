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
    const fetchReservations = async () => {
      try {
        if (role === "ADMIN") {
          // Lógica para obtener todas las reservaciones como administrador
          const response = await fetch(`${API_URL}/api/Reservation/getall`, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const data = await response.json();
          setReservations(data);
        } else if (role === "PLAYER") {
          // Obtener el ID del usuario directamente del token al iniciar sesión
          const token = localStorage.getItem("token");  
          if (token) {
            try {
              const decodedToken = jwtDecode(token);
              const userId = decodedToken.sub;

              // Hacer la solicitud al endpoint específico para obtener las reservaciones del jugador
              const response = await fetch(`${API_URL}/api/Reservation/myreservations`, {
                headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              });

              const data = await response.json();
              console.log("Player reservations:", data);

              setReservations(data);
            } catch (error) {
              console.error("Error decoding token:", error);
            }
          }
        } else if (role === "OWNER") {
          // Lógica para obtener todas las reservaciones del owner
          const response = await fetch(`${API_URL}/api/Reservation/allreservations-owner`, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const data = await response.json();
          setReservations(data);
        } 
      }
      catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [role]);

  return (
    <>
      <Header />
      <h1>
      {role === "ADMIN" ? "Todas las Reservas" : 
        role === "OWNER" ? "Reservas de mis canchas" :
        "Mis Reservas"
      }
      </h1>
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
