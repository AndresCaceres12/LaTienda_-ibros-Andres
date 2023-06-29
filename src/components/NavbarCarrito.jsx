import React from "react";
import { Link } from "react-router-dom";
const NavbarCarrito = () => {
  return (
    <div>
      <div className="ContieneNarvab">
        <h3>Libros con Andres</h3>
        <ul>
          <Link className="ov-btn-slide-left" to="/">
            Inicio
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavbarCarrito;
