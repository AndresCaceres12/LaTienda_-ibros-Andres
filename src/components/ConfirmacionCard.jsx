import React, { useEffect, useState } from "react";
import "./ConfirmacionCard.css";

import Modal from "./Modal";
import { Link } from "react-router-dom";

function ConfirmacionCard({ total, setAllProducts ,CerrarConfirmacionCard}) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const codigoAlmacenado = localStorage.getItem("referencia");
    if (codigoAlmacenado) {
      setCodigoGenerado(codigoAlmacenado);
    } else {
      const nuevoCodigo = generarCodigo();
      setCodigoGenerado(nuevoCodigo);
      localStorage.setItem("referencia", nuevoCodigo);
    }
  }, []);

  function generarCodigo() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let referencia = "";

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      referencia += caracteres[randomIndex];
    }

    return referencia;
  }

  const [codigoGenerado, setCodigoGenerado] = useState("");

  const fechaActual = new Date();
  const Mostrar = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(!false);

  };
  return (
    <div className="modalConfirmacionCard">
      <div className="modal-contentConfirmacionCard">
        <div className="Tittle">
          <h3>Detalle del movimiento </h3>
          <p onClick={CerrarConfirmacionCard}> X</p>
        </div>
        
        <div className="contenedorInfo">
          <p>
            Valor : <br />
            <b> $ {total}</b>
          </p>
          <p>
            Compra en : <br />
            <b> Libros con Andres</b>
          </p>
          <p> 
            <p>
            Referencia :<br />
            <b>{codigoGenerado}</b>
          </p>
            Fecha : <br />
            <b>{fechaActual.toDateString()}</b>
          </p>
         
         
        </div>
        <Link>
        <button className="button-confirmarCard" onClick={Mostrar}>
  Confirmar
</button>
        </Link>
      </div>
      
    </div>
  );
}

export default ConfirmacionCard;