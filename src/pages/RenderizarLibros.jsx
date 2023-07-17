import React, { useEffect, useState, useCallback } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarInicio from "../components/Navbar";
import "../style/RenderizarLibros.css";
import { Tooltip,Loading, Image} from "@nextui-org/react";
import ResultadoBusqueda from "../components/ResultadoBusqueda";
export const RenderizarLibros = ({
  bookInfo,
  setTotal,
  total,
  allProducts,
  setAllProducts,
  Cantidad,
  setCantidad,
  setBookInfo,
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

  const sliderSettings = {
    centerPadding: "90%",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: filteredBooks.length > 4 ? 4 : filteredBooks.length,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 497,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {filteredBooks.length > 0 && (
        <div>
          <NavbarInicio
            setBookInfo={setBookInfo}
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
        {!filteredBooks.length && (
          <div className="Cargando">
            <Loading />
          </div>
        )}

        <div className="row">
          {filteredBooks.length > 0 && (
            <div>
              <p className="Subtitulo">Novedades literarias</p>
              <div className="slider-container">
                <Slider {...sliderSettings}>
                  {filteredBooks.map((book, index) => (
                    <div key={index} className="slider-item">
                      <div className="card">
                        <div className="card-body">
                          <b className="card-title">{book.title}</b>
                          <Link to={`/libro/${index}`}>
                            <Tooltip
                              content="Mas informacion del libro"
                              color="invert"
                            >
                              {book.cover?.medium ? (
                                <Image
                                  src={book.cover.medium}
                                  alt="Portada del libro"
                                  objectFit="none"
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
              <ResultadoBusqueda/>
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