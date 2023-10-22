import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";

import Signin from "./components/Singin/Signin";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import { useContext } from "react";
import Profile from "./components/Profile/Profile";
import Reservations from "./components/Reservations/Reservations";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/signin" /> },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/reservations",
      element: <Reservations />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
