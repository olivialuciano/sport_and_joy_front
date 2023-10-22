import React from "react";
import "./Dashboard.css";
import { Search } from "../Search/Search";
import { Header } from "../Header/Header";
import { Filter } from "../Filter/Filter";
import { FieldCard } from "../FieldCard/FieldCard";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Search />
      <div className="container">
        <div className="filter">
          <Filter />
        </div>
        <div className="flex-fields">
          <FieldCard />
          <FieldCard />
          <FieldCard />
          <FieldCard />
          <FieldCard />
          <FieldCard />
          <FieldCard />
          <FieldCard />
        </div>
      </div>
    </>
  );
};
// no aparece el search, no se xq si lo hice como un context, es solo un imut para buscar...
export default Dashboard;
