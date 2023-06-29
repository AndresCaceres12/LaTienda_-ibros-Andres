import React, { useState } from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para procesar el pago o enviar los datos del formulario
    console.log("Payment submitted");
    console.log("Card Number:", cardNumber);
    console.log("Card Holder:", cardHolder);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV:", cvv);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("Zip Code:", zipCode);

    // Restablecer los campos del formulario
    setCardNumber("");
    setCardHolder("");
    setExpiryDate("");
    setCvv("");
    setAddress("");
    setCity("");
    setZipCode("");
  };

  return (
    <div className="payment-form-container">
      <h2>Informacion de Pago</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Numero de Targeta </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardHolder">Titular de la tarjetar</label>
          <input
            type="text"
            id="cardHolder"
            value={cardHolder}
            onChange={handleCardHolderChange}
            placeholder="Andres caceres"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiryDate">Fecha de caducidad</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={handleCvvChange}
              placeholder="123"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">DIRECCIÓN</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            placeholder="123 Street"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">Ciudad</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={handleCityChange}
              placeholder="Gotica"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Codigo postal</label>
            <input
              type="text"
              id="zipCode"
              value={zipCode}
              onChange={handleZipCodeChange}
              placeholder="12345"
              required
            />
          </div>
        </div>
        <button className="submit-button" type="submit">
        Pagar
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
