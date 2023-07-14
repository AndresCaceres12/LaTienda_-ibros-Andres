import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./Carrito.css";
import { useState, useEffect } from "react";
import { Tooltip } from "@nextui-org/react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { DeleteForever } from "@mui/icons-material";
import { Loading } from "@nextui-org/react";
import { Card } from "@mui/material";
export const Carrito = ({
  allProducts,
  toggleMostrarProductos,
  total,
  CantidadDeProductos,
  cantidadCarrito,
  setTotal,
  setAllProducts,
}) => {
  const [Cart, setCart] = useState(
    Array.isArray(allProducts) ? allProducts : []
  );
  const [isEmpty, setIsEmpty] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const SumarTotal = () => {
    let total = 0;
    Cart.forEach((product) => {
      const price = parseFloat(product.precio.replace(".", ""));
      total += price;
    });
    setTotal(total);
  };

  useEffect(() => {
    SumarTotal();
    CantidadDeProductos();

    if (Cart.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [Cart]);

  const removeFromCart = (product) => {
    const index = Cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      const newCart = [...Cart];
      newCart.splice(index, 1);
      setCart(newCart);
      setAllProducts(newCart);
    }
  };

  const eliminarTodo = () => {
    setIsLoading(true);

    setTimeout(() => {
      setCart([]);
      setAllProducts([]);
      setIsLoading(false);
      setTimeout(() => {
        toggleMostrarProductos(false);
      }, 2000);
    }, 1000);
  };

  return (
    <div className="containerCARD">
      <div className="CarritoContainer">
        <div className="NavbarCarro">
          <h4>Carrito</h4>
          <h3
            onClick={() => {
              toggleMostrarProductos();
              CantidadDeProductos();
            }}
          >
            <HighlightOffIcon />
          </h3>
        </div>

        <div>
          <ul className="Carrito-list">
            {Cart.map((product, index) => (
              <li key={index}>
                <div className="ContenedorCard">
                  <img
                    src={product.cover.large}
                    width={"50px"}
                    alt=""
                    srcSet=""
                  />
                  <div className="DescripcionBook">
                    <span> {product.title}</span>
                    <h6>Precio: $ {product.precio}</h6>
                  </div>

                  <p onClick={() => removeFromCart(product)}>x</p>
                </div>
              </li>
            ))}
            {Cart.length > 0 && (
              <span
                id="EliminarTodo"
                onClick={eliminarTodo}
                style={{ cursor: "pointer" }}
              >
                {!isLoading && <DeleteForever style={{ color: "blue" }} />}{" "}
                {isLoading && (
                  <div className="cargando">
                    <Loading type="points" />
                  </div>
                )}
              </span>
            )}
          </ul>
        </div>

        <footer>
          <div className="FooterContainer">
            <div className="TotalPrecio">
              <h5>{cantidadCarrito} Productos seleccionados</h5>
              <h5 style={{ color: "orange" }}>{total}</h5>
            </div>
            {Cart.length > 0 && (
              <div>
                <Link to={"/Pagos"}>
                  <button className="submit-button">Proceder al pago</button>
                </Link>
              </div>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
};
