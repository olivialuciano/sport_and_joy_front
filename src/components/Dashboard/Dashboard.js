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
  const [allFields, setAllFields] = useState([]);
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
        setAllFields(fieldsMapped)
        setFields(fieldsMapped);
        console.log("Canchas cargadas:", fieldsMapped);
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

  // const calcularDistancia = (lat1, lon1, lat2, lon2) => {
  //   const R = 6371; // Radio de la Tierra en kilómetros
  //   const dLat = (lat2 - lat1) * (Math.PI / 180);
  //   const dLon = (lon2 - lon1) * (Math.PI / 180);
  //   const a =
  //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //     Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   const distancia = R * c; // Distancia en kilómetros
  //   return distancia;
  // };
  
  const handleApplyFilters = (deporte, bar, vestuario, precioMin, precioMax) => {
    console.log("handleApplyFilters está siendo ejecutada");
    console.log("Filtros aplicados:", deporte, bar, vestuario, precioMin, precioMax);
    const filteredFields = allFields.filter((field) => {
      // Aplicar lógica de filtrado según los criterios seleccionados
  
      // Filtro por deporte
      const deporteFilter = !deporte || field.sport === parseInt(deporte);
  
      // Filtro por bar
      const barFilter = bar === undefined || field.bar === bar;
  
      // Filtro por vestuario
      const vestuarioFilter = vestuario === undefined || field.lockerRoom === vestuario;
  
      // Filtro por precio
      const precioFilter = (!precioMin || field.price >= parseFloat(precioMin)) &&
                           (!precioMax || field.price <= parseFloat(precioMax));
  
      // Filtro por distancia máxima
  //     const distanciaFilter =
  // !distanciaMaxima ||
  // (ubicacionUsuario &&
  //   field.location && 
  //   calcularDistancia(
  //     ubicacionUsuario.lat,
  //     ubicacionUsuario.lon,
  //     field.location.lat,
  //     field.location.lon
  //   ) <= parseFloat(distanciaMaxima));
  
      // Devuelve verdadero solo si todos los filtros son verdaderos
      return deporteFilter && barFilter && vestuarioFilter && precioFilter;
    });

    console.log("Canchas filtradas:", filteredFields);
    setFields(filteredFields);
  };



  return (
    <>
      <Header />
      <ToggleTheme />
      <div className="dashboard-container">
        <div className="top-bar">
          {role !== "OWNER" && role !== "ADMIN" && <Filter onApplyFilters={handleApplyFilters} />}
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
