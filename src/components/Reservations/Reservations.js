import React from "react";
import ReservationCard from "../ReservationCard/ReservationCard";
import { Header } from "../Header/Header";
import "./Reservations.css";
import { Search } from "../Search/Search";
import { useUser } from "../../services/Authentication/authentication.context";

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
  const { user } = useUser();

  return (
    <>
      <Header />
      <h1>{user.role === "admin" ? "Todas las Reservas" : "Mis Reservas"}</h1>
      <Search />
      <div className="container">
        {user.role === "admin" ? (
          // Lógica para mostrar todas las reservas (ajustar según la estructura de datos)
          <>
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
          </>
        ) : (
          // Lógica para mostrar solo las reservas del usuario (ajustar según la estructura de datos)
          <>
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
          </>
        )}
      </div>
    </>
  );
  
};

export default Reservations;
