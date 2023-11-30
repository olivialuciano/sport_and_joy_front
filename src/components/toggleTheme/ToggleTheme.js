import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../services/theme.context";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button size="lg" className="m-3" onClick={toggleTheme} variant="primary">
      Cambiar a tema {theme === "light" ? "oscuro" : "claro"}
    </Button>
  );
};

export default ToggleTheme;
