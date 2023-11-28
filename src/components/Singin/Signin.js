import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import "./Signin.css";
import API_URL from "../../constants/config";
import { useUser } from "../../services/Authentication/authentication.context";

const Signin = () => {
  const { updateUser } = useUser();
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

  const signInHandler = async () => {
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

    try {
      const response = await fetch(`${API_URL} + "/api/User/authorization"`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const { token, role } = await response.json();
  
        // Almacena el token en el localStorage
        localStorage.setItem("token", token);
  
        // Actualiza el usuario en el contexto con el nuevo rol
        updateUser({ role });
  
        console.log("Inicio de sesión exitoso");
  
        // Redirige a la página de dashboard
        navigate("/dashboard");
      } else {
        // Manejar errores, por ejemplo, mostrar un mensaje de error
        console.log("Error en el inicio de sesión");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

    // navigate("/dashboard");

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