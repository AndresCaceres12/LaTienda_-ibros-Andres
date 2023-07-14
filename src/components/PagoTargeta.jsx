import React, { useState} from "react";
import "../style/PagoTargeta.css";
import { Input } from "@mui/material";
import ConfirmacionCard from "./ConfirmacionCard";
const PagoTargeta = ({setAllProducts, total}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [showModal, setShowModal] = useState(false);

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

    console.log("Payment submitted");
    console.log("Card Number:", cardNumber);
    console.log("Card Holder:", cardHolder);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV:", cvv);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("Zip Code:", zipCode);

    setShowModal(true);
    setCardNumber("");
    setCardHolder("");
    setExpiryDate("");
    setCvv("");
    setAddress("");
    setCity("");
    setZipCode("");
  };
  const CerrarConfirmacionCard = () => {
    setShowModal(false);
  };
  const setLocalstorage = value =>{
    try{
      setTotal(value)
      window.localStorage.setItem("Totalpagar",value)
    } catch(error){
      console.log("no se pudo capturar")
    }
   }
   setLocalstorage(total)
  return (
    <div className="payment-form-container">
      <h2>Informacion de Pago</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Numero de Targeta </label>
          <Input
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
          <Input
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
            <Input
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
            <Input
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
          <Input
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
            <Input
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
            <Input
              type="text"
              id="zipCode"
              value={zipCode}
              onChange={handleZipCodeChange}
              placeholder="12345"
              required
            />
          </div>
        </div>
        <button className="submit-button" >
          Pagar
        </button>
      </form>
     {showModal && <ConfirmacionCard  CerrarConfirmacionCard={CerrarConfirmacionCard} total={total} setAllProducts={setAllProducts}/>}
    </div>
  );
};

export default PagoTargeta;
