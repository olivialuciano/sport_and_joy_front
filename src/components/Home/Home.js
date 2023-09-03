import React from "react";
import "./Home.css";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const buttonNavigateSignup = () => {
    navigate("/signup");
  };
  const buttonNavigateSignin = () => {
    navigate("/signin");
  };

  return (
    <div className="home-container">
      <h1 className="brand">Sport&Joy</h1>
      <h3 className="brand2">¡Reservar una cancha nunca fue tan fácil!</h3>
      <div className="button-div">
        <button className="button" onClick={buttonNavigateSignin}>
          ingresar
        </button>
        <button className="button" onClick={buttonNavigateSignup}>
          registrarse
        </button>
      </div>
    </div>
  );
};

export default Home;
