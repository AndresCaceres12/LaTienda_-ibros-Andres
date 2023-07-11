import React, { useEffect, useState } from "react";
import "./Modal.css";
import { Link } from "react-router-dom";

function Modal({ onClose, setAllProducts }) {

  useEffect(() => {
    return () => {
      setAllProducts([]);
    };
  }, [onClose]);

  return (
    <>
    <div className="modal">
      <div className="modal-content">
        <h2>Pago realizado con éxito</h2>
        <p>Gracias por comprar en Libros con Andrés</p>
        <Link to="/">
          <button >Cerrar</button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Modal;
