import React, { useContext, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import "./Signin.css";
import API_URL from "../../constants/api";
import { jwtDecode } from "jwt-decode";
import { RoleContext } from "../../services/role.context";

const Signin = () => {
  // const { updateUserRole, setDecodedToken } = useUser(); // Asegúrate de tener una función setDecodedToken en el contexto
  // const { updateUserRole } = useUser(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { setRole } = useContext(RoleContext);
  const { setToken } = useContext(RoleContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();
  const buttonNavigateSignin = () => {
    navigate("/signup");
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
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
      const response = await fetch(`${API_URL}/api/User/authorization`, {
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
        try {
          const responseText = await response.text();
          console.log("Response Text:", responseText);

          // Intenta analizar la respuesta solo si es un formato JSON válido
          // const responseData = JSON.parse(responseText);

          // const { token, role } = responseText;

          // Almacena el token en el localStorage
          localStorage.setItem("token", responseText);
          console.log("Inicio de sesión exitoso");
          console.log(responseText);

          // const role = localStorage.getItem(dasdwq)

          const role = jwtDecode(responseText).role;

          localStorage.setItem("role", role);

          setRole(role);

          setToken(responseText);

          console.log(role);

          // Actualiza el usuario en el contexto con el nuevo rol
          // updateUserRole(role);
          // console.log(role);

          // No actualizamos el rol directamente aquí, ya que solo obtenemos el token
          // Redirige a la página de dashboard
          navigate("/dashboard");
        } catch (jsonError) {
          console.error("Error al analizar la respuesta JSON:", jsonError);
        }
      } else {
        console.log("Error en el inicio de sesión:", await response.text());
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
        {emailError && (
          <p className="error-message">Ingrese un correo electrónico válido</p>
        )}
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
        {passwordError && (
          <p className="error-message">
            La contraseña debe tener al menos 6 caracteres
          </p>
        )}
      </div>
      <button className="signin-button" type="button" onClick={signInHandler}>
        Ingresar
      </button>
      <p onClick={buttonNavigateSignin}>¿No tenés una cuenta? ¡Registrate!</p>
    </div>
  );
};

export default Signin;
