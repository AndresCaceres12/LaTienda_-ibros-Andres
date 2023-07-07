import React from "react";
import "./Footer.css";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer fixed-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4 className="footer-heading">Sobre nosotros</h4>
              <p className="footer-text">
                Libros con Andrés es una plataforma dedicada a la recomendación
                y discusión de libros de diferentes géneros y temáticas. Nuestro
                objetivo es fomentar el amor por la lectura y crear una
                comunidad apasionada por los libros.
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Contacto</h4>
              <p className="footer-text">
                Si tienes alguna pregunta o sugerencia, no dudes en ponerte en
                contacto con nosotros.
              </p>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <a
                    href="mailto:info@librosconandres.com"
                    target="_blank"
                    className="footer-contact-link"
                  >
                    cesarandrescaceres1212@gmail.com
                  </a>
                </li>
                <li className="footer-contact-item">
                  <a
                    href="tel:+57 3246039115"
                    target="_blank"
                    className="footer-contact-link"
                  >
                    +57 3246039115
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Sígueme en redes sociales</h4>
              <div className="footer-social-icons">
                <a
                  href="https://github.com/AndresCaceres12/LaTienda_-ibros-Andres"
                  target="_blank"
                  className="footer-social-link"
                >
                  <FaGithub className="footer-icon" />
                </a>
                <a
                  href="https://twitter.com/librosconandres"
                  target="_blank"
                  className="footer-social-link"
                >
                  <FaTwitter className="footer-icon" />
                </a>
                <a
                  href="https://instagram.com/librosconandres"
                  target="_blank"
                  className="footer-social-link"
                >
                  <FaInstagram className="footer-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
