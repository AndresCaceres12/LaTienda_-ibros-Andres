import React, { useState } from "react";
import PaymentForm from "./PagoTargeta";
import NavbarOpcional from "./NavbarOpcional";
import PagoNequi from "./PagoNequi";
import { FaCreditCard } from "react-icons/fa";
import "./Pagos.css";

const Pago = ({ total, setTotal }) => {
  const [targetForm, setTargetForm] = useState(true);
  const [nequiPago, setNequiPago] = useState(false);

  const mostrarNequi = () => {
    setTargetForm(false);
    setNequiPago(true);
  };

  const mostrarTarget = () => {
    setTargetForm(true);
    setNequiPago(false);
  };

  return (
    <div>
      <NavbarOpcional />
      <div className="payment-description">
        <p>Libros con Andres te ofrece 2 formas distintas de hacer el pago:</p>
        <ul>
          <li>
            Tarjeta: Puedes pagar con cualquier tarjeta de crédito o débito, sin
            comisiones ni intermediarios. Solo necesitas ingresar los datos de
            tu tarjeta y confirmar el pago.
          </li>
          <li>
            Nequi: Puedes pagar con tu cuenta de Nequi, una plataforma
            financiera que te permite usar tu plata sin cuota de manejo desde el
            celular. Solo necesitas tener saldo suficiente en tu Nequi.
          </li>
        </ul>
      </div>

      <div className="ContenedorButtons">
        <button className="button" onClick={mostrarTarget}>
          <FaCreditCard className="icon" />
          Tarjeta
        </button>
        <img
          className="buttonNequi"
          style={{ cursor: "pointer" }}
          onClick={mostrarNequi}
          src="https://assets-global.website-files.com/6317a229ebf7723658463b4b/631b991aff307a018c353dcd_Logo-Nequi.svg"
          alt="Logo de Nequi Colombia"
        />
      </div>
      {targetForm && <PaymentForm />}
      {nequiPago && <PagoNequi total={total} setTotal={setTotal} />}
    </div>
  );
};

export default Pago;
