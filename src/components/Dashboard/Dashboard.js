import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import FieldCard from "../FieldCard/FieldCard";
import { Header } from "../Header/Header";
import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";
import { useNavigate } from "react-router-dom";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import API_URL from "../../constants/api";
import { RoleContext } from "../../services/role.context";

const Dashboard = () => {
  const [fields, setFields] = useState([]);
  const [allFields, setAllFields] = useState([]);
  const [selectedfield, setSelectedfield] = useState(null);
  const { role } = useContext(RoleContext);
  const [showAddFieldPopup, setShowAddFieldPopup] = useState(false);
  const [newField, setNewField] = useState({
    image: null,
    Name: "",
    location: "",
    description: "",
    sport: "",
    lockerRoom: "",
    ber: "",
    price: "",
  });

  const handleAddFieldClick = () => {
    setShowAddFieldPopup(true);
  };

  const handleAddFieldChange = (e) => {
    const { name, value } = e.target;
    setNewField((prevField) => ({ ...prevField, [name]: value }));
  };

  //POST FIELD ---- no funciona

  const handleAddFieldSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${API_URL}/api/Field/create-admin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newField),
      });

      if (response.ok) {
        const createdField = await response.json();
        setFields((prevFields) => [...prevFields, createdField]);
        setShowAddFieldPopup(false);
      } else {
        console.log("Error al crear cancha:", await response.text());
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  ///////GET ALL FIELDS

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${API_URL}/api/Field/getall`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((fieldData) => {
        const fieldsMapped = fieldData.map((field) => ({
          ...field,
        }));
        setAllFields(fieldsMapped);
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

  const handleApplyFilters = (
    deporte,
    bar,
    vestuario,
    precioMin,
    precioMax
  ) => {
    console.log("handleApplyFilters está siendo ejecutada");
    console.log(
      "Filtros aplicados:",
      deporte,
      bar,
      vestuario,
      precioMin,
      precioMax
    );
    const filteredFields = allFields.filter((field) => {
      const deporteFilter = !deporte || field.sport === parseInt(deporte);
      const barFilter = bar === undefined || field.bar === bar;
      const vestuarioFilter =
        vestuario === undefined || field.lockerRoom === vestuario;
      const precioFilter =
        (!precioMin || field.price >= parseFloat(precioMin)) &&
        (!precioMax || field.price <= parseFloat(precioMax));

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
          {role !== "OWNER" && role !== "ADMIN" && (
            <Filter onApplyFilters={handleApplyFilters} />
          )}
        </div>
        <div className="dashboard-right">
          {role === "ADMIN" && (
            <button id="add-field-button" onClick={handleAddFieldClick}>
              Agregar Cancha
            </button>
          )}
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
        {/* Popup para agregar canhca */}
        {showAddFieldPopup && (
          <div className="add-field-popup">
            <form onSubmit={handleAddFieldSubmit}>
              {/* Campos del formulario para el nuevo cancha */}
              <label>
                Imagen:
                <input
                  type="text"
                  name="image"
                  onChange={handleAddFieldChange}
                />
              </label>
              <label>
                Nombre:
                <input
                  type="text"
                  name="name"
                  value={newField.name}
                  onChange={handleAddFieldChange}
                />
              </label>

              <label>
                Ubicación:
                <input
                  type="text"
                  name="location"
                  value={newField.location}
                  onChange={handleAddFieldChange}
                />
              </label>
              <label>
                Descripción:
                <input
                  type="text"
                  name="description"
                  value={newField.description}
                  onChange={handleAddFieldChange}
                />
              </label>
              <label>
                Deporte:
                <select
                  name="sport"
                  value={newField.sport}
                  onChange={handleAddFieldChange}
                >
                  <option value="FOOTBALL">Fútbol</option>
                  <option value="VOLLEY">Vóley</option>
                  <option value="TENNIS">Tenis</option>
                </select>
              </label>
              <label>
                Vestuarios:
                <input
                  type="checkbox"
                  name="lockerRoom"
                  value={newField.lockerRoom}
                  onChange={handleAddFieldChange}
                />
              </label>
              <label>
                Bar:
                <input
                  type="checkbox"
                  name="bar"
                  value={newField.bar}
                  onChange={handleAddFieldChange}
                />
              </label>
              <label>
                Precio:
                <input
                  type="text"
                  name="price"
                  value={newField.price}
                  onChange={handleAddFieldChange}
                />
              </label>
              <button type="submit">Agregar</button>
            </form>
            <button onClick={() => setShowAddFieldPopup(false)}>
              Cancelar
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
