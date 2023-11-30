import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { ThemeContextProvider } from "./services/theme.context";
import { RoleContextProvider } from "./services/role.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RoleContextProvider>
        <App />
      </RoleContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
