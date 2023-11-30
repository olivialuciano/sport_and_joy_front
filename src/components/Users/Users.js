import React from "react";
import UsersCard from "../UsersCard/UsersCard";
import { Header } from "../Header/Header";
import "./Users.css";
import { Search } from "../Search/Search";

const Users = () => {
  return (
    <>
      <Header />
      <h1>Usuarios activos</h1>
      <Search />
      <div className="container">
        {Array.from({ length: 50 }, (_, index) => (
          <UsersCard key={index} />
        ))}
      </div>
    </>
  );
};

export default Users;
