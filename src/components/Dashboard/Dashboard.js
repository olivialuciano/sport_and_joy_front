
import React from "react";
import "./Dashboard.css";
import FieldCard from "../FieldCard/FieldCard";
import { Header } from "../Header/Header";
import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";

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
  const canchas = [
    {
      id: 1,
      nombre: 'Cancha 1',
      ubicacion: 'Ubicación 1',
      precio: '$20/hora',
      imagen: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      nombre: 'Cancha 2',
      ubicacion: 'Ubicación 2',
      precio: '$25/hora',
      imagen: 'https://via.placeholder.com/150',
    },
    // Agrega más canchas según sea necesario
  ];

  return (
    <>
      <Header />
      <Search />
      <div className="container">
        <div className="filter">
          <Filter />
        </div>
        <div className="flex-fields">
          {canchas.map((cancha) => (
            <FieldCard key={cancha.id} cancha={cancha} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;




















  