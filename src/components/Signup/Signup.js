import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();
  const buttonNavigateSignup = () => {
    navigate("/signin");
  };

  const changeNameHandler = (event) => {
    if (event.target.value === "") {
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
    } else {
      emailRef.current.style.borderColor = "";
      emailRef.current.style.outline = "";
    }
    setName(event.target.value);
  };

  const changeEmailHandler = (event) => {
    if (event.target.value === "") {
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
    } else {
      emailRef.current.style.borderColor = "";
      emailRef.current.style.outline = "";
    }
    setEmail(event.target.value);
  };

  const changePasswordHandler = (event) => {
    if (event.target.value === "") {
      passwordRef.current.style.borderColor = "red";
      passwordRef.current.style.outline = "none";
    } else {
      passwordRef.current.style.borderColor = "";
      passwordRef.current.style.outline = "";
    }
    setPassword(event.target.value);
  };
  const signUpHandler = () => {
    setRegister(true);

    if (name === "") {
      nameRef.current.focus();
      nameRef.current.style.borderColor = "red";
      nameRef.current.style.outline = "none";
      return;
    }
    if (email === "") {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      return;
    }
    if (password === "") {
      passwordRef.current.focus();
      passwordRef.current.style.borderColor = "orange";
      passwordRef.current.style.outline = "none";
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="signup-container">
      <h2>Creá tu cuenta</h2>
      <div className="input-container">
        <label className="label">Nombre</label>
        <input
          className="input"
          placeholder=""
          type="text"
          ref={nameRef}
          value={name}
          onChange={changeNameHandler}
        />
      </div>
      {register && email === "" && <p>Ingrese su nombre</p>}
      <div className="input-container">
        <label className="label">Mail</label>
        <input
          className="input"
          placeholder=""
          type="email"
          ref={emailRef}
          value={email}
          onChange={changeEmailHandler}
        />
      </div>
      {register && email === "" && <p>Ingrese un correo electrónico válido</p>}
      <div className="input-container">
        <label className="label">Contraseña</label>
        <input
          className="input"
          placeholder=""
          type="password"
          ref={passwordRef}
          value={password}
          onChange={changePasswordHandler}
        />
      </div>
      {register && password === "" && <p>Ingrese una contraseña válida</p>}
      <button className="signin-button" type="button" onClick={signUpHandler}>
        Registrarse
      </button>
      <p onClick={buttonNavigateSignup}>
        ¿Ya tenés una cuenta? ¡Iniciá Sesión!
      </p>
    </div>
  );
};

export default Signup;
