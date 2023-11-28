import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import "./Signup.css";
import { useUser } from "../../services/Authentication/authentication.context";
import API_URL from "../../constants/config";

const Signup = () => {

 
  const [image, setImage] = useState("");
  const [lastname, setLastname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();
  const buttonNavigateSignup = () => {
    navigate("/signin");
  };

  const validateName = () => {
    setNameError(name.trim() === "");
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setEmailError(!emailPattern.test(email));
  };

  const validatePassword = () => {
    setPasswordError(password.length < 6);
  };

  const signUpHandler = async () => {
    validateName();
    validateEmail();
    validatePassword();

    if (nameError || emailError || passwordError) {
      return;
    }

    if (name === "" || email === "" || password === "") {
      // Si algún campo está vacío, muestra el mensaje de error
      setNameError(true);
      setEmailError(true);
      setPasswordError(true);
      return;
    }

    // Tu lógica de registro aquí
    try {
      const response = await fetch(`${API_URL} + "/api/User/registration"`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Image: image,
          FirstName: name,
          LastName: lastname,
          Email: email,
          Password: password,
          Role: 2
        }),
      });

      if (response.ok) {
        // Registro exitoso, puedes manejar la respuesta del servidor si es necesario
        // const role = "player";  Reemplaza con la lógica para obtener el rol
        // updateUser({ role });
        // console.log("Registro exitoso");

        // Redirige a la página de dashboard después del registro
        navigate("/signin");
      } else {
        // Manejar errores, por ejemplo, mostrar un mensaje de error
        console.log("Error en el registro");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };




    // navigate("/dashboard");

  return (
    <div className="signup-container">
      <h2>Creá tu cuenta</h2>
      <div className="input-container">
        <label className="label">Imagen</label>
        <input
          placeholder=""
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label className="label">Nombre</label>
        <input
          className={`input ${nameError ? "error" : ""}`}
          placeholder=""
          type="text"
          ref={nameRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validateName}
        />
        {nameError && <p className="error-message">Ingrese su nombre</p>}
      </div>
      <div className="input-container">
        <label className="label">Apellido</label>
        <input
          placeholder=""
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
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
      <button className="signin-button" type="button" onClick={signUpHandler}>
        Registrarse
      </button>
      <p onClick={buttonNavigateSignup}>¿Ya tenés una cuenta? ¡Iniciá Sesión!</p>
    </div>
  );
};

export default Signup;