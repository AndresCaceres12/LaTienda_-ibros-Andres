import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "@nextui-org/react";
import "./Carrito.css"
export const Carrito = ({
  allProducts,
  toggleMostrarProductos,
  total,
  CantidadDeProductos,
  cantidadCarrito,
  setTotal,
  setAllProducts,
  Cantidad,
  setCantidad,
}) => {
  const [Cart, setCart] = useState(allProducts);
  const [isEmpty, setIsEmpty] = useState();

  const SumarTotal = () => {
    let total = 0;

    Cart.forEach((product) => {
      const price = parseFloat(product.precio.replace(".", ""));
      total += price;
    });

    setTotal(total);
  };
  console.log(total);
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
    setCart([]);
    setAllProducts([]);
  };
  const Sumarcantidad = () => {
    const final = Cantidad + 1;
    setCantidad(final);
  };
  const Restarcantidad = () => {
    if (Cantidad > 1) {
      const final = Cantidad - 1;
      setCantidad(final);
    } else {
      return Cantidad;
    }
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
          x
        </h3>
      </div>

      <div>
        <ul className="Carrito-list">
          {Cart.map((product, index) => (
            <li key={index}>
              <div className="ContenedorCard">
                <img src={product.image_url} width={"50px"} alt="" srcSet="" />
                <div className="DescripcionBook">
                  <span>Libro: {product.title}</span>
                  <h6>Precio: $ {product.precio}</h6>
                  <div className="LaCantidad">
                    <span
                      className="Cantidades"
                      id="CambiarCantidad"
                      onClick={Sumarcantidad}
                    >
                      +
                    </span>
                    <span className="Cantidades"> {Cantidad} </span>
                    <span
                      className="Cantidades"
                      id="CambiarCantidad"
                      onClick={Restarcantidad}
                    >
                      {" "}
                      -
                    </span>
                  </div>
                </div>
                <p onClick={() => removeFromCart(product)}>🗑️</p>
              </div>
            </li>
          ))}
          <Button
            size="md"
            id="EliminarTodo"
            onClick={eliminarTodo}
            style={{ backgroundColor: "#f1f2f3", color: "black" }}
          >
            Eliminar todo
          </Button>
        </ul>
      </div>
      <footer>
        <div className="FooterContainer">
          <div className="TotalPrecio">
            <h5>{cantidadCarrito} Productos seleccionados</h5>
            <h5 style={{ color: "orange" }}>{total.toLocaleString()}</h5>
          </div>
          {Cart.length > 0 && (
            <div>
              <Link to={"/Pagos"}>
                <button  className="submit-button" >Proceder al pago</button>
              </Link>
            </div>
          )}
        </div>
      </footer>
    </div>
    </div>
   
  );
};
