import React from 'react'
import { Header } from "../Header/Header";
import "./AdminView.css"
import { useNavigate } from "react-router-dom";


export default AdminView => {
    const navigate = useNavigate();
    const buttonNavigateUsers = () => {
        navigate("/users");
    };
    const buttonNavigateReservations = () => {
        navigate("/reservations");
    };
    

  return (
    <>
    < Header />
        <div className='body'>            
            <button className="users-button" onClick={buttonNavigateUsers}>Usuarios Activos</button>
            <button className="reservations-button" onClick={buttonNavigateReservations}>Reservas</button>

        </div>
    </>
  )
}

