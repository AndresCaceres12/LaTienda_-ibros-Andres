import React, { useEffect, useState } from "react";
import Narvab from "./Narvab";
import "./RenderizarLibros.css";
import { Carrusel } from "./Carrusel";
import { Link, useNavigate } from "react-router-dom";

export const RenderizarLibros = ({bookInfo}) => {
 


  const [categorias, setCategorias] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [EsconderCarro, setEscondercarro] = useState(false);
  const [selectedlibro, setSelectedlibro] = useState(null);
  
  const navigate = useNavigate();

  

  const filteredBooks = categorias.length
    ? bookInfo.filter((book) => book.categoria === categorias)
    : bookInfo;

  const onAddProduct = (product) => {
    setAllProducts([...allProducts, product]);
  };
  
  const handlelibroClick = (libro) => {
    setSelectedlibro(libro);
  };
  
  useEffect(() => {
    if (selectedlibro) {
      navigate(`/libro/${bookInfo.indexOf(selectedlibro)}`);
    }
  }, [selectedlibro, navigate, bookInfo]);

  return (
    <div>
      <Narvab
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
                      onClick={() => handlelibroClick(book)}
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
