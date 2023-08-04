import React from 'react'
import {Link, useNavigate,useLocation} from "react-router-dom"
import "./Nav.css"
export const Nav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  if (location.pathname === "/login" || location.pathname === "/")
  return (
    <div className="nav-container">
      <div><button className='nav-button' onClick={() => navigate("/login")}>Inicio</button></div>
      <div className = "nav-right-container">
      <button className='nav-button' onClick={() => navigate("/login")}>Iniciar Sesión</button>
      <button className='nav-button' onClick={() => navigate("/login")}>Cerrar Sesión</button>
      </div>
    </div>
  )
  return ( <div className="nav-container">
  <div className='nav-left-container'><button className='nav-button' onClick={() => navigate("/login")}>Inicio</button>
  <button className="nav-button" onClick={()=> navigate("/Doctors")}>Funcionarios</button>
  <button className='nav-button' onClick={() => navigate("/unidad_referencia")}>Unidad Referencia</button>
  </div>
  <div className = "nav-right-container">
  <button className='nav-button' onClick={() => navigate("/login")}>Cerrar Sesión</button>
  </div>
  
</div>)
}

export default Nav