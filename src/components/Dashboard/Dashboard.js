import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import FieldCard from "../FieldCard/FieldCard";
import { Header } from "../Header/Header";
import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../services/Authentication/authentication.context";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import API_URL from "../../constants/config";

const Dashboard = () => {
  // const [fields, setFields] = useState([]);

  // useEffect(() => {
  //   fetch(API_URL + "/api/Field/getall", {
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

  const [selectedCancha, setSelectedCancha] = useState(null);
  const { user } = useUser();
  const navigate = useNavigate();
  const canchas = [
    {
      id: 1,
      nombre: "Cancha 1",
      ubicacion: "Ubicación 1",
      precio: "$20/hora",
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nombre: "Cancha 2",
      ubicacion: "Ubicación 2",
      precio: "$25/hora",
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nombre: "Cancha 2",
      ubicacion: "Ubicación 2",
      precio: "$25/hora",
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nombre: "Cancha 2",
      ubicacion: "Ubicación 2",
      precio: "$25/hora",
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nombre: "Cancha 2",
      ubicacion: "Ubicación 2",
      precio: "$25/hora",
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nombre: "Cancha 2",
      ubicacion: "Ubicación 2",
      precio: "$25/hora",
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nombre: "Cancha 2",
      ubicacion: "Ubicación 2",
      precio: "$25/hora",
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nombre: "Cancha 2",
      ubicacion: "Ubicación 2",
      precio: "$25/hora",
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nombre: "Cancha 2",
      ubicacion: "Ubicación 2",
      precio: "$25/hora",
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nombre: "Cancha 2",
      ubicacion: "Ubicación 2",
      precio: "$25/hora",
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nombre: "Cancha 2",
      ubicacion: "Ubicación 2",
      precio: "$25/hora",
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nombre: "Cancha 2",
      ubicacion: "Ubicación 2",
      precio: "$25/hora",
      imagen: "https://via.placeholder.com/150",
    },

    // Agrega más canchas según sea necesario
  ];

  const handleCardClick = (cancha) => {
    setSelectedCancha(cancha);
    navigate(`/fieldDetail/${cancha.id}`);
  };

  return (
    // <>
    //   <Header />
    //   <Search />
    //   <div className="container">
    //     <div className="filter">
    //       <Filter />
    //     </div>
    //     <div className="flex-fields">
    //       {canchas.map((cancha) => (
    //         <FieldCard key={cancha.id} cancha={cancha} onCardClick={handleCardClick}/>
    //       ))}
    //     </div>
    //   </div>
    // </>
    // <>
    //   <Header />
    //   <Search />
    //   <div className="container">
    //     {user.role !== 'owner' && (
    //       <div className="filter">
    //         <Filter />
    //       </div>
    //     )}
    //     <div className="flex-fields">
    //       {canchas.map((cancha) => (
    //         <FieldCard key={cancha.id} cancha={cancha} onCardClick={handleCardClick} />
    //       ))}
    //     </div>
    //   </div>
    // </>
    <>
      <Header />
      <ToggleTheme /> 
      <div className="dashboard-container">
        <div className="top-bar">
          {user.role !== 1 && user.role !== 0 && <Filter />}
        </div>
        <div className="dashboard-right">
          <Search />
          <div className="flex-fields">
            {canchas.map((cancha) => (
              <FieldCard
                key={cancha.id}
                cancha={cancha}
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
