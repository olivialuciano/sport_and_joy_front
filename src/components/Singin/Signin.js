import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();
  const buttonNavigateSignin = () => {
    navigate("/signup");
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setEmailError(!emailPattern.test(email));
  };

  const validatePassword = () => {
    setPasswordError(password.length < 6);
  };

  const signInHandler = () => {
    validateEmail();
    validatePassword();

    if (emailError || passwordError) {
      return;
    }

    if (email === "" || password === "") {
      // Si algún campo está vacío, muestra el mensaje de error
      setEmailError(true);
      setPasswordError(true);
      return;
    }

    // Tu lógica de inicio de sesión aquí
    navigate("/dashboard");
  };

  return (
    <div className="signin-container">
      <h2>Ingresá a tu cuenta</h2>
      <div className="input-container">
        <label className="label">Mail</label>
        <input
          className={`input ${emailError ? "error" : ""}`}
          placeholder=""
          type="email"
          ref={emailRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
        />
        {emailError && <p className="error-message">Ingrese un correo electrónico válido</p>}
      </div>
      <div className="input-container">
        <label className="label">Contraseña</label>
        <input
          className={`input ${passwordError ? "error" : ""}`}
          placeholder=""
          type="password"
          ref={passwordRef}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePassword}
        />
        {passwordError && <p className="error-message">La contraseña debe tener al menos 6 caracteres</p>}
      </div>
      <button className="signin-button" type="button" onClick={signInHandler}>
        Ingresar
      </button>
      <p onClick={buttonNavigateSignin}>¿No tenés una cuenta? ¡Registrate!</p>
    </div>
  );
};

export default Signin;