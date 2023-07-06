import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaRemoveFormat } from "react-icons/fa";
import { Button } from "@nextui-org/react";

 export const Carrito = ({
  allProducts,
  toggleMostrarProductos,
  total,
  CantidadDeProductos,
  setTotal,
  setAllProducts
}) => {
  const [Cart, setCart] = useState(allProducts);

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
    FaRemoveFormat();
    CantidadDeProductos();
    
  }, [Cart]);
  const removeFromCart = (product) => {
    const index = Cart.findIndex((item) => item.id === product.id);
  
    if (index !== -1) {
      const newCart = [...Cart];
      newCart.splice(index, 1);
      setCart(newCart);
      setAllProducts(newCart);
      setCantidadCarrito((prevCantidad) => prevCantidad - 1);
    }
  };
  const eliminarTodo = () => {
    setCart([]);
    setAllProducts([]);
    setCantidadCarrito(0);
  }
  return (
    <div className="CarritoContainer">
      <div className="NavbarCarro">
        <h4>Carrito</h4>
        <h3 onClick={() => { toggleMostrarProductos(); CantidadDeProductos(); }}>x</h3>

      </div>

      <ul className="Carrito-list">
        {Cart.map((product, index) => (
          <li key={index}>
            <div className="ContenedorCard">
              <img src={product.image_url} width={"50px"} alt="" srcset="" />
              <div className="DescripcionBook">
                <span>Libro: {product.title}</span>
                <h6>Precio: $ {product.precio}</h6>
              </div>

              <p onClick={() => removeFromCart(product)}>🗑️</p>
            </div>
          </li>
        ))}
         <Button color="error" id="EliminarTodo" onClick={eliminarTodo}>Eliminar todo</Button>
      </ul>

      <footer>
        <div className="FooterContainer">
          <div className="TotalPrecio">
            <h5>Productos  </h5>
            <h5 style={{ color: "orange" }}>{total.toLocaleString()}</h5> 
          </div>
          {allProducts.length > 0 && (
            <div>
              <Link to="/Pagos">
              <Button>pagar</Button>

            </Link>
           
            </div>
            
          )}
          
        </div>
      </footer>
    </div>
  );
};