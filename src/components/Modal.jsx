import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Pago realizado con éxito</h2>
        <p>Gracias por comprar en Libros con Andres</p>

        <button onClick={props.onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default Modal;
