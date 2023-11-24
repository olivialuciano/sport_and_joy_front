import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { UserProvider } from "./services/Authentication/authentication.context";
import { ThemeContextProvider } from "./services/Authentication/theme.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserProvider>
        <ThemeContextProvider>
            <App />
         </ThemeContextProvider>
    </UserProvider>
);
