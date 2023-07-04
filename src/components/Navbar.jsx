import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Carrito } from "./Carrito";
const Navbar = ({
  bookInfo,
  setCategorias,
  categorias,
  allProducts,
  setAllProducts,
  total,
  setTotal,
}) => {
  const [lista, setLista] = useState(false);
  const [categoriasList, setCategoriasList] = useState(false);
  const [mostrarProductos, setMostrarProductos] = useState(false);

  useEffect(() => {
    setCategoriasList(false);
    setLista(false);
  }, [mostrarProductos]);

  const mostrarAutores = () => {
    setLista(!lista);
    setCategoriasList(false);
    setMostrarProductos(false);
  };

  const mostrarCategorias = () => {
    setCategoriasList(!categoriasList);
    setLista(false);
    setMostrarProductos(false);
  };

  const filtrarPorCategoria = (categoria) => {
    if (categoria === "Todos los libros") {
      setCategorias(""); 
    } else {
      setCategorias(categoria);
    }
    setCategoriasList(false);
  };

  const toggleMostrarProductos = () => {
    setMostrarProductos(!mostrarProductos);
  };
  const VolverAincio = () => {
    setMostrarProductos(false);
  };

  const uniqueAuthors = Array.from(
    new Set(bookInfo.map((book) => book.author))
  );

  const uniqueCategories = [
    "Todos los libros",
    ...Array.from(new Set(bookInfo.map((book) => book.categoria))),
  ];

  return (
    <>
      <div className="ContieneNavbar">
        <h3>Libros con Andres</h3>
        <ul>
          <Link
            onClick={VolverAincio}
            id="Inicio"
            className="BotonesDeInicio"
            to="/"
          >
            Inicio
          </Link>
          <li className="BotonesDeInicio" onClick={mostrarCategorias}>
            Categorias
          </li>
          <li className="BotonesDeInicio" onClick={mostrarAutores}>
            Autores
          </li>
          <li className="BotonesDeInicio" onClick={toggleMostrarProductos}>
            carrito
          </li>
        </ul>
      </div>

      {lista && (
        <div className="custom-list-container1">
          <ul className="custom-list">
            {uniqueAuthors.map((author, index) => (
              <li key={index}>{author}</li>
            ))}
          </ul>
        </div>
      )}

      {mostrarProductos && (
        <Carrito
          total={total}
          setTotal={setTotal}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          toggleMostrarProductos={toggleMostrarProductos}
        />
      )}

      {categoriasList && (
        <div className="custom-list-container">
          <ul className="custom-list">
            {uniqueCategories.map((categoria, index) => (
              <li
                key={index}
                onClick={() => filtrarPorCategoria(categoria)}
                className={categorias === categoria ? "active" : ""}
              >
                {categoria}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
