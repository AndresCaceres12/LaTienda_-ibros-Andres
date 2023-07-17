import React, { useEffect, useState,useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import { Carrito } from "./Carrito";
import { Input, Navbar, Text } from "@nextui-org/react";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@nextui-org/react";
import { Home, Search } from "@mui/icons-material";
import { useBooksContext, useinputContext } from "./ContextBooks";
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
  cartProducts,
  setCartProducts,
}) => {
  const [lista, setLista] = useState(false);
  const [categoriasList, setCategoriasList] = useState(false);
  const [mostrarProductos, setMostrarProductos] = useState(false);
  const { search, setsearch } = useBooksContext(); 
  const { LibrosBuscados, setLibrosBuscados } = useinputContext()
  const EnviarFormulario = (e) => {
    e.preventDefault();
    setsearch(e.target.elements.searchInput.value);
    e.target.reset();
  };
  useEffect(() => {
    setCategoriasList(false);
    setLista(false);
  }, [mostrarProductos]);
console.log(search)
  const mostrarAutores = () => {
    setLista(!lista);
    setCategoriasList(false);
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

  const limpiarFiltro = () => {
    setCategorias("");
  };

  const VolverAincio = () => {
    setMostrarProductos(false);
    limpiarFiltro();
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
      <Navbar
        isBordered
        variant="sticky"
        style={{ position: "fixed", zIndex: 1000 }}
        className="ContieneNavbar"
      >
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
          <form onSubmit={EnviarFormulario}>
            <Input
              size="md"
              name="searchInput"
              placeholder="Libros, autores y más"
              aria-label="Búsqueda"
            />
            <button style={{border:"none",backgroundColor:"transparent"}} type="submit"><Search/></button>
          </form>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link>
            <Link onClick={VolverAincio} id="Inicio" to="/">
              <Home />
            </Link>
          </Navbar.Link>

          <Navbar.Link
            isActive
            onClick={mostrarAutores}
            style={{ cursor: "pointer" }}
          >
            Autores
          </Navbar.Link>
          <Navbar.Link
            isActive
            onClick={toggleMostrarProductos}
            className="ButtonCart"
          >
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
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
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
          <div className="custom-list-scroll">
            <MenuList>
              {uniqueCategories.map((categoria, index) => (
                <MenuItem
                  key={index}
                  onClick={() => filtrarPorCategoria(categoria)}
                >
                  {categoria}
                </MenuItem>
              ))}
            </MenuList>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarInicio;
