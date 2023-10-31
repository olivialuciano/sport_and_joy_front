import React from "react";
import { AuthenticationContext } from "../../../services/Authentication/authentication.context";

export const Protected = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user) {
    return <Navigate to="/signin" replace />;
  } else {
    return children;
  }
};
