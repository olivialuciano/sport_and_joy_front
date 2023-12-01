import React, { useEffect, useState } from "react";
import UsersCard from "../UsersCard/UsersCard";
import { Header } from "../Header/Header";
import "./Users.css";
import { Search } from "../Search/Search";
import API_URL from "../../constants/api";

// const Users = () => {

//   const [users, setUsers] = useState([]);


//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     fetch(`${API_URL}/api/User/getall`, {
//       headers: {
//         Accept: "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((userData) => {
//         console.log(userData);
//         setUsers(userData);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);




//   return (
//     <>
//       <Header />
//       <h1>Usuarios activos</h1>
//       <Search />
//       <div className="container">
//          {users.map((user) => (
//           <UsersCard key={user.id} user={user} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default Users;


//CON FORMULARIO!

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showAddUserPopup, setShowAddUserPopup] = useState(false);
  const [newUser, setNewUser] = useState({
    // Campos del nuevo usuario
    image: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "Player", // Valor predeterminado
  });

  const handleAddUserClick = () => {
    setShowAddUserPopup(true);
  };

  const handleAddUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUserSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar la información del nuevo usuario al servidor
    console.log("Nuevo usuario:", newUser);

    // Cierra el popup después de agregar el usuario
    setShowAddUserPopup(false);
  };

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
        console.log(userData);
        setUsers(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <h1>Usuarios activos</h1>
      <button onClick={handleAddUserClick}>Agregar Usuario</button>
      <Search />
      <div className="container">
        {users.map((user) => (
          <UsersCard key={user.id} user={user} />
        ))}
      </div>

      {/* Popup para agregar usuario */}
      {showAddUserPopup && (
        <div className="add-user-popup">
          <form onSubmit={handleAddUserSubmit}>
            {/* Campos del formulario para el nuevo usuario */}
            <label>
              Imagen:
              <input
                type="text"
                name="image"
                onChange={handleAddUserChange}
              />
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
                name="userType"
                value={newUser.userType}
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