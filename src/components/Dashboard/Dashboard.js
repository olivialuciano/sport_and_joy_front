import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";
import { FieldCard } from "../FieldCard/FieldCard";
import { Header } from "../Header/Header";

const Dashboard = () => {
  //const [fields, setFields] = useState([]);
  //const BACKEND_URL = "http://localhost:8080";

  // useEffect(() => {
  //   fetch(BACKEND_URL + "/field", {
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((fieldData) => {
  //       const fieldsMapped = fieldsMapped.map((field) => ({
  //         ...field,
  //       }));
  //       setFields(fieldsMapped);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

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
