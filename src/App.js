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
import FieldDetail from "./components/FieldDetail/FieldDetail";
import Users from "./components/Users/Users";
import AdminView from "./components/AdminView/AdminView";
import { UserProvider, useUser } from "./services/Authentication/authentication.context";

const App = () => {
  const { user } = useUser();
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
      element: user.role === "player" ? <Dashboard /> : <Navigate to="/adminView" />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/reservations",
      element: <Reservations />,
    },
    {
      path: "/fieldDetail/:id",
      element: <FieldDetail />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/adminView",
      element: <AdminView />, 
    },
    // {
    //   path: "/admin",
    //   element: user.role === "admin" ? <AdminView /> : <Navigate to="/dashboard" />,
    // },

  ]);

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
