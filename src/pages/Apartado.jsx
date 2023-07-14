import React from "react";
import { useParams } from "react-router-dom";
import NavbarOpcional from "../components/NavbarOpcional";
import "../style/Apartado.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookOpen,
  faBookReader,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

const Apartado = ({ bookInfo }) => {
  const { index } = useParams();

  const selectedBook = bookInfo[index];

  if (!selectedBook) {
    return <div>Libro no encontrado</div>;
  }

  const icons = {
    Novela: faBookOpen,
    Ciencia: faBookReader,
    Historia: faBookmark,
    default: faBook,
  };

  const icon = icons[selectedBook.categoria] || icons.default;

  return (
    <>
      <NavbarOpcional />

      <div className="ContenedorTodoo">
        <div className="contenedorApartado">
          <div className="imagenLibro">
            <img
              width={"300px"}
              src={selectedBook.cover.medium}
              alt={selectedBook.title}
            />
          </div>

          <div className="contenedorDescripcion">
            <FontAwesomeIcon icon={icon} size="3x" color="#BFBFBF" />
            <h2>{selectedBook.title}</h2>
            <p>
              {" "}
              <b>Autor:</b> {selectedBook.author}
            </p>
            <p>
              {" "}
              <b>Editor:</b> {selectedBook.publisher}
            </p>
            <p>
              {" "}
              <b>Fecha de publicación:</b> {selectedBook.publish_date}
            </p>
            <p>
              {" "}
              <b>Número de páginas:</b>{" "}
              {selectedBook.number_of_pages?.toString() || "No disponible"}
            </p>
            <p>
              {" "}
              <b>Precio: $</b> {selectedBook.precio}
            </p>
            <p>
              {" "}
              <b>Categoría:</b> {selectedBook.categoria}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apartado;
