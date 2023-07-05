import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./RenderizarLibros.css";
import { Carrusel } from "./Carrusel";
import { Link } from "react-router-dom";

export const RenderizarLibros = ({ bookInfo, setTotal, total }) => {
  const [categorias, setCategorias] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [EsconderCarro, setEscondercarro] = useState(false);


  const filteredBooks = categorias.length
    ? bookInfo.filter((book) => book.categoria === categorias)
    : bookInfo;

  const onAddProduct = (product) => {
    setAllProducts([...allProducts, product]);
  };


  return (
    <div>
      <Navbar
        setTotal={setTotal}
        total={total}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        bookInfo={bookInfo}
        categorias={categorias}
        setCategorias={setCategorias}
        onAddProduct={onAddProduct}
        setMostrarCarrito={setEscondercarro}
      />

      <Carrusel bookInfo={bookInfo} />

      {filteredBooks.length > 0 && (
        <div className="container">
          <div className="row">
            {filteredBooks.map((book, index) => (
              <div key={index} className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Titulo: {book.title}</h5>
                    <Link
                      to={`/libro/${index}`}
                     
                    >
                      {book.image_url ? (
                        <img src={book.image_url} alt="" />
                      ) : (
                        <span>No hay imagen disponible</span>
                      )}
                    </Link>

                    <p className="card-text">Autor: {book.author}</p>
                    <p>Precio : ${book.precio}</p>
                  </div>
                  <button className="add-to-cart-btn">
                    <i className="fas fa-shopping-cart"></i>
                    <span onClick={() => onAddProduct(book)}>
                      Añadir al carrito
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
