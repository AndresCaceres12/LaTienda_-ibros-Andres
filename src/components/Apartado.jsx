import React from "react";
import { useParams } from "react-router-dom";
import NavbarOpcional from "./NavbarOpcional";
import "./Apartado.css";

const Apartado = ({ bookInfo }) => {
  
  const { index } = useParams();

  const selectedBook = bookInfo[index];
  //objeto
  if (!selectedBook) {
    return <div>Libro no encontrado</div>;
  }

  return (
    <>
      <div className="titulo">
        <NavbarOpcional />
        <h2>{selectedBook.title}</h2>
      </div>

      <div className="contenedorApartado">
        <div className="imagenLibro">
          <img
            width={"300px"}
            src={selectedBook.image_url}
            alt={selectedBook.title}
          />
        </div>
        <div className="contenedorDescripcion">
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
    </>
  );
};

export default Apartado;
