// import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router";
import FieldItem from "../FieldItem/FieldItem";
// import { AuthenticationContext } from "../../services/authentication/authentication.context";
// import ToggleTheme from "../toggleTheme/ToggleTheme";
// const BOOKS = [
//   {
//     id: 1,
//     title: "100 años de soledad",
//     author: "Gabriel García Marquez",
//     dateRead: new Date(2021, 8, 12),
//     pageCount: 410,
//   },
//   {
//     id: 2,
//     title: "Todos los fuegos el fuego",
//     author: "Julio Cortazar",
//     dateRead: new Date(2020, 6, 11),
//     pageCount: 197,
//   },
//   {
//     id: 3,
//     title: "Asesinato en el Orient Express",
//     author: "Agatha Christie",
//     dateRead: new Date(2021, 5, 9),
//     pageCount: 256,
//   },
//   {
//     id: 4,
//     title: "Las dos torres",
//     author: "J.R.R Tolkien",
//     dateRead: new Date(2020, 3, 22),
//     pageCount: 352,
//   },
// ];

const Dashboard = () => {
  // const { handleLogout, user } = useContext(AuthenticationContext);
  // const { toggleLoading } = useContext(APIContext);

  const navigate = useNavigate();

  // const onLogout = () => {
  //   handleLogout();
  //   navigate("/signin");
  // };

  return (
    <>
      <h1>Books Champion App!</h1>
      <h3>¡Quiero leer libros!</h3>
      <p>Bienvenido</p>

      <FieldItem />
      <FieldItem />
      <FieldItem />
      <FieldItem />
      <FieldItem />
    </>
  );
};
export default Dashboard;
