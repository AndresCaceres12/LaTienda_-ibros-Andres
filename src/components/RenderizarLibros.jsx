import React, { useEffect, useState, useCallback } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarInicio from "./Navbar";
import "./RenderizarLibros.css";
import { Tooltip } from "@nextui-org/react";
import { Loading } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
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
   
    localStorage.setItem("userData", JSON.stringify(allProducts));
    
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

  const sliderSettings = {
    centerPadding: "90%",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: filteredBooks.length > 4 ? 4 : filteredBooks.length, // Cambiar esta opción
    slidesToScroll: 4,

  };
 
  return (
    <div>
     {filteredBooks.length > 0 && (
          <div >
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
          </div>
        )}

      <div>
        {filteredBooks.length < 1 && (
          <div className="Cargando">
            <Loading />
          </div>
        )}

        <div className="row">
          {filteredBooks.length > 0 && (
            <div className="slider-container">
              <Slider {...sliderSettings}>
                {filteredBooks.map((book, index) => (
                  <div key={index} className="slider-item">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <Link to={`/libro/${index}`}>
                          <Tooltip
                            content="Mas infromacion del libro"
                            color="invert"
                          >
                            {book.image_url ? (
                              <Image
                                src={book.image_url}
                                objectFit="none"
                                alt="Default Image"
                                width={200}
                                height={300}
                              />
                            ) : (
                              <span>No hay imagen disponible</span>
                            )}
                          </Tooltip>
                        </Link>
                        <p className="card-text">Autor: {book.author}</p>
                        <p>Precio: ${book.precio}</p>
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
              </Slider>
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
    </div>
  );
};
