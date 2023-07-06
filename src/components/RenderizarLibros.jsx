import React, { useEffect, useState, useCallback } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import NavbarInicio from "./Navbar";
import "./RenderizarLibros.css";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";

export const RenderizarLibros = ({
  bookInfo,
  setTotal,
  total,
  allProducts,
  setAllProducts,
  Cantidad,
  setCantidad,
}) => {
  const [categorias, setCategorias] = useState([]);
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const [EsconderCarro, setEscondercarro] = useState(false);
  const [mensajes, setMensajes] = useState([]);

  const filteredBooks = categorias.length
    ? bookInfo.filter((book) => book.categoria === categorias)
    : bookInfo;

  const onAddProduct = useCallback(
    (product) => {
      setAllProducts((prevProducts) => [...prevProducts, product]);
      setCantidadCarrito((prevCantidad) => prevCantidad + 1);
      const newMensaje = {
        id: Date.now(),
        texto: "Producto añadido al carrito",
      };
      setMensajes((prevMensajes) => [...prevMensajes, newMensaje]);

      setTimeout(() => {
        setMensajes((prevMensajes) =>
          prevMensajes.filter((mensaje) => mensaje.id !== newMensaje.id)
        );
      }, 800);
    },
    [setAllProducts, setCantidadCarrito]
  );

  useEffect(() => {
    setCantidadCarrito(allProducts.length);
  }, [allProducts]);

  const CantidadDeProductos = () => {
    setCantidadCarrito(allProducts.length);
  };

  return (
    <div>
      <NavbarInicio
       Cantidad={Cantidad}
       setCantidad={setCantidad}
        cantidadCarrito={cantidadCarrito}
        setCantidadCarrito={setCantidadCarrito}
        setTotal={setTotal}
        total={total}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        bookInfo={bookInfo}
        CantidadDeProductos={CantidadDeProductos}
        categorias={categorias}
        setCategorias={setCategorias}
        setMostrarCarrito={setEscondercarro}
      />

      <div>
        {filteredBooks.length > 0 && (
          <div className="container">
            <div className="row">
              {filteredBooks.map((book, index) => (
                <div key={index} className="col-md-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <Link to={`/libro/${index}`}>
                        {book.image_url ? (
                          <img src={book.image_url} alt="" />
                        ) : (
                          <span>No hay imagen disponible</span>
                        )}
                      </Link>

                      <p className="card-text">Autor: {book.author}</p>
                      <p>Precio : ${book.precio}</p>
                    </div>

                    <Button
                      onClick={() => {
                        onAddProduct(book);
                        CantidadDeProductos();
                      }}
                      variant="contained"
                    >
                      Añadir al carrito
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <TransitionGroup className="mensaje-container">
        {mensajes.map((mensaje) => (
          <CSSTransition
            key={mensaje.id}
            timeout={300}
            classNames="mensaje-item"
          >
            <p className="mensaje">{mensaje.texto}</p>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
