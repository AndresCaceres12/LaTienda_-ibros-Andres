import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Carrito } from "./Carrito";
import { Text } from "@nextui-org/react";
import { Navbar } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@nextui-org/react";

const NavbarInicio = ({
  bookInfo,
  setCategorias,
  cantidadCarrito,
  onAddProduct,
  setCantidadCarrito,
  CantidadDeProductos,
  allProducts,
  setAllProducts,
  total,
  setTotal,
  Cantidad,
  setCantidad,
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
      <Navbar isBordered variant="sticky" style={{position:"fixed"}} className="ContieneNavbar">
        <Navbar.Brand className="LogoNombre">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3145/3145765.png"
            alt="Logo de libros"
            width="32"
          />
          <Text b color="inherit" hideIn="xs">
            <Text h2 size={30} weight="bold">
              Libros Con Andres
            </Text>
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link>
            <Link onClick={VolverAincio} id="Inicio" to="/">
              Inicio
            </Link>
          </Navbar.Link>
          <Navbar.Link isActive onClick={mostrarCategorias} style={{ cursor: "pointer" }}>
            Categorias
          </Navbar.Link>
          <Navbar.Link isActive onClick={mostrarAutores} style={{ cursor: "pointer" }}>
            Autores
          </Navbar.Link>
          <Navbar.Link isActive onClick={toggleMostrarProductos} className="ButtonCart">
            <Tooltip placement="bottom" content="Carrito" color="invert">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="contadorCarrito">{cantidadCarrito}</span>
            </Tooltip>
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>

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
          Cantidad={Cantidad}
          setCantidad={setCantidad}
          cantidadCarrito={cantidadCarrito}
          setCantidadCarrito={setCantidadCarrito}
          total={total}
          setTotal={setTotal}
          onAddProduct={onAddProduct}
          CantidadDeProductos={CantidadDeProductos}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          toggleMostrarProductos={toggleMostrarProductos}
        />
      )}

      {categoriasList && (
        <div className="custom-list-container">
          <ul className="custom-list">
            {uniqueCategories.map((categoria, index) => (
              <li key={index} onClick={() => filtrarPorCategoria(categoria)}>
                {categoria}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavbarInicio;
