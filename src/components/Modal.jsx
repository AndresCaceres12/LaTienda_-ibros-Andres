import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";
function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Pago realizado con éxito</h2>
        <p>Gracias por comprar en Libros con Andres</p>
<Link to="/" > <button onClick={props.onClose}>Cerrar</button>
</Link>
       
      </div>
    </div>
  );
}

export default Modal;
