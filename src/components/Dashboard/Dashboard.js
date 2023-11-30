import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import FieldCard from "../FieldCard/FieldCard";
import { Header } from "../Header/Header";
import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";
import { useNavigate } from "react-router-dom";
// import { useUser } from "../../services/Authentication/authentication.context";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import API_URL from "../../constants/api";
import { RoleContext } from "../../services/role.context";

const Dashboard = () => {
  const [fields, setFields] = useState([]);
  const [selectedfield, setSelectedfield] = useState(null);
  const { role } = useContext(RoleContext);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${API_URL}/api/Field/getall`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`, // Reemplaza con tu token
      },
    })
      .then((response) => response.json())
      .then((fieldData) => {
        const fieldsMapped = fieldData.map((field) => ({
          ...field,
        }));
        setFields(fieldsMapped);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  const handleCardClick = (field) => {
    setSelectedfield(field);
    navigate(`/fieldDetail/${field.id}`);
  };

  return (
    <>
      <Header />
      <ToggleTheme />
      <div className="dashboard-container">
        <div className="top-bar">
          {role !== "OWNER" && role !== "ADMIN" && <Filter />}
        </div>
        <div className="dashboard-right">
          <Search />
          <div className="flex-fields">
            {fields.map((field) => (
              <FieldCard
                key={field.id}
                field={field}
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
