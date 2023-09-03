import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();
  const buttonNavigateSignin = () => {
    navigate("/signin");
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
  const signInHandler = () => {
    setRegister(true);
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
    <div className="signin-container">
      <h2>Ingresá a tu cuenta</h2>
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
      <button className="signin-button" type="button" onClick={signInHandler}>
        Ingresar
      </button>
      <p onClick={buttonNavigateSignin}>¿No tenés una cuenta? ¡Registrate!</p>
    </div>
  );
};

export default Signin;
