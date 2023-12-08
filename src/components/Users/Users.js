import React, { useEffect, useState } from "react";
import UsersCard from "../UsersCard/UsersCard";
import { Header } from "../Header/Header";
import "./Users.css";
import { Search } from "../Search/Search";
import API_URL from "../../constants/api";

//CON FORMULARIO!

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showAddUserPopup, setShowAddUserPopup] = useState(false);
  const [newUser, setNewUser] = useState({
    image: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "PLAYER",
  });

  const handleAddUserClick = () => {
    setShowAddUserPopup(true);
  };

  const handleAddUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  //POST USER

  const handleAddUserSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/User/registration-adduser-admin`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newUser),
        }
      );

      if (response.ok) {
        const createdUser = await response.json();
        setUsers((prevUsers) => [...prevUsers, createdUser]);
        setShowAddUserPopup(false);
      } else {
        console.log("Error al crear usuario:", await response.text());
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  // DELETE USER

  const handleDeleteUser = async (userId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/User/${userId}/delete-admin`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
      } else {
        console.log("Error al eliminar usuario:", await response.text());
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  //GET ALL
  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${API_URL}/api/User/getall`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((userData) => {
        // console.log(userData);
        setUsers(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <button id="add-user-button" onClick={handleAddUserClick}>
        Agregar Usuario
      </button>
      <h1>Usuarios activos</h1>
      <Search />
      <div className="container">
        {users.map((user) => (
          <UsersCard
            key={user.id}
            user={user}
            onDeleteUser={handleDeleteUser}
          />
        ))}
      </div>

      {/* Popup para agregar usuario */}
      {showAddUserPopup && (
        <div className="add-user-popup">
          <form onSubmit={handleAddUserSubmit}>
            {/* Campos del formulario para el nuevo usuario */}
            <label>
              Imagen:
              <input type="text" name="image" onChange={handleAddUserChange} />
            </label>
            <label>
              Nombre:
              <input
                type="text"
                name="firstName"
                value={newUser.firstName}
                onChange={handleAddUserChange}
              />
            </label>
            <label>
              Apellido:
              <input
                type="text"
                name="lastName"
                value={newUser.lastName}
                onChange={handleAddUserChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleAddUserChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleAddUserChange}
              />
            </label>
            <label>
              Tipo de Usuario:
              <select
                name="role"
                value={newUser.role}
                onChange={handleAddUserChange}
              >
                <option value="Player">Player</option>
                <option value="Owner">Owner</option>
              </select>
            </label>
            <button type="submit">Agregar</button>
          </form>
          <button onClick={() => setShowAddUserPopup(false)}>Cancelar</button>
        </div>
      )}
    </>
  );
};

export default Users;
