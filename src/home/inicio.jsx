import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="container mb-25">
      
      <Link id="BotonesDeInicio"className="btn btn-dark" to="/">Inicio</Link>
      <Link id="BotonesDeInicio"className="btn btn-dark"to="/renderizarlibros">Ejercicio 1</Link>
      
    </div>
  );
};

export default Inicio;