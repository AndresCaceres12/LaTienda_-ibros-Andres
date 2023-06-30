import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
const NavbarOpcional = () => {
  return (
    <div>
       <div className="ContieneNavbar">
        <h3>Libros con Andres</h3>
        <ul>
          <Link
            // onClick={VolverAincio}
            id="Inicio"
            className="BotonesDeInicio"
            to="/"
          >
            Inicio
          </Link>
        </ul>
      </div>
     
      <div></div>
    </div>
  )
}

export default NavbarOpcional