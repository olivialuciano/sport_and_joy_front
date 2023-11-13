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
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
      </div>
    </>
  );
};

export default Users;
