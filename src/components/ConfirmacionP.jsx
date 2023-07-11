import React, { useEffect, useState } from "react";
import "./ConfirmacionP.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Button from "@mui/material/Button";

function ConfirmacionP({
  total,
  setAllProducts,
  CerrarConfirmacion,

}) {
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
    let referencia = localStorage.getItem("referencia");
    referencia = generarCodigo();
    localStorage.setItem("referencia", referencia);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="modalConfirmacion">
      <div className="modal-contentConfirmacion">
        <div className="Tittle">
          <h3>Detalle del movimiento </h3>
          <p onClick={CerrarConfirmacion}> X</p>
        </div>
        <h4 className="subTittle">Info de compra</h4>
        <div className="contenedorInfo">
          <p>
            Compra en : <br />
            <b> Libros con Andres</b>
          </p>
          <p>
            Valor : <br />
            <b>{total}</b>
          </p>
          <p>
            Fecha : <br />
            <b>{fechaActual.toDateString()}</b>
          </p>
          <p>
            Referencia :<br />
            <b>{codigoGenerado}</b>
          </p>
        </div>
        <Link to={"/Pago-Realizado"}>
          <button className="button-confirmar" onClick={Mostrar}>
            Confirmar
          </button>
        </Link>
      </div>
      {showModal && (
        <Modal setAllProducts={setAllProducts} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default ConfirmacionP;
