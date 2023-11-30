import React, { useContext } from "react";
import ReservationCard from "../ReservationCard/ReservationCard";
import { Header } from "../Header/Header";
import "./Reservations.css";
import { Search } from "../Search/Search";
import { RoleContext } from "../../services/role.context";

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

  return (
    <>
      <Header />
      <h1>{role === "ADMIN" ? "Todas las Reservas" : "Mis Reservas"}</h1>
      <Search />
      <div className="container">
        {role === "ADMIN" ? (
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
