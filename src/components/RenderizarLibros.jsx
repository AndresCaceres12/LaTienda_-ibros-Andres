import React, { useEffect, useState, useCallback } from "react";

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
}) => {
  const [categorias, setCategorias] = useState([]);
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const [EsconderCarro, setEscondercarro] = useState(false);

  const filteredBooks = categorias.length
    ? bookInfo.filter((book) => book.categoria === categorias)
    : bookInfo;

    const onAddProduct = useCallback((product) => {
      setAllProducts((prevProducts) => [...prevProducts, product]);
      setCantidadCarrito((prevCantidad) => prevCantidad + 1);
    }, [setAllProducts, setCantidadCarrito]);
    useEffect(() => {
      setCantidadCarrito(allProducts.length);
    }, [allProducts]);
    
    
  const CantidadDeProductos = ()=>{
    setCantidadCarrito(allProducts.length);
  }

  return (
    <div>
      <NavbarInicio
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
                      <h5 className="card-title">Titulo: {book.title}</h5>
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

                    <Button onClick={() => { onAddProduct(book); CantidadDeProductos(); }} variant="contained">
  Añadir al carrito
</Button>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
