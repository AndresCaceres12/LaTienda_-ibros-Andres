import React from "react";
import { Link } from "react-router-dom";
import PaymentForm from "./PaymentForm";

const Pagos = () => {
  return (
    <div>
      <div className="ContieneNarvab">
        <h3>Libros con Andres</h3>
        <ul>
          <Link
            // onClick={VolverAincio}
            id="Inicio"
            className="ov-btn-slide-left"
            to="/"
          >
            Inicio
          </Link>
        </ul>
      </div>
     
      <div>
<PaymentForm/>
      </div>
    </div>
  );
};

export default Pagos;
