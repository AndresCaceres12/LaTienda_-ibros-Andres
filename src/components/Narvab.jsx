import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Narvab.css";

const ProductosSeleccionados = ({ allProducts, toggleMostrarProductos,bookInfo }) => {
  const [Cart, setCart] = useState(allProducts);
  const [total, setTotal] = useState(0);

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
  }, [Cart]);

  const removeFromCart = (product) => {
    const index = Cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      const newCart = [...Cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };
  
  return (
    <div className="CarritoContainer">
      <div className="NavbarCarro">
        <h4>Carrito</h4>
        <h3 onClick={toggleMostrarProductos}>x</h3>
      </div>

      <h3>Productos seleccionados:</h3>
      <ul className="Carrito-list">
        {Cart.map((product, index) => (
          <li key={index}>
            <div className="ContenedorCard">
              <img src={product.image_url} width={"70px"} alt="" srcset="" />
              Libro: {product.title}
              <p onClick={() => removeFromCart(product)}>x</p>
            </div>
            <h6>Precio: $ {product.precio}</h6>
          </li>
        ))}
      </ul>

      <footer>
        <div className="FooterContainer">
          <h5>total a pagar = {total.toLocaleString()}</h5>
          <button>Pagar</button>
        </div>
      </footer>
    </div>
  );
};


const Narvab = ({
  bookInfo,
  setCategorias,
  categorias,
  allProducts,
  setAllProducts,
}) => {
  const [lista, setLista] = useState(false);
  const [categoriasList, setCategoriasList] = useState(false);
  const [mostrarProductos, setMostrarProductos] = useState(false);

  useEffect(() => {
    setCategoriasList(false);
    setLista(false);
  }, [mostrarProductos]);

  const mostrarAutores = () => {
    setLista(!lista);
    setCategoriasList(false);
    setMostrarProductos(false)
  };

  const mostrarCategorias = () => {
    setCategoriasList(!categoriasList);
    setLista(false);
    setMostrarProductos(false)
  };

  const filtrarPorCategoria = (categoria) => {
    if (categoria === "Todos los libros") {
      setCategorias(""); // Vaciar la categoría para mostrar todos los libros
    } else {
      setCategorias(categoria);
    }
    setCategoriasList(false);
  };

  const toggleMostrarProductos = () => {
    setMostrarProductos(!mostrarProductos);
  };
  const VolverAincio = () => {
    setMostrarProductos(false);
  };

  const uniqueAuthors = Array.from(
    new Set(bookInfo.map((book) => book.author))
  );
 
  const uniqueCategories = ["Todos los libros", ...Array.from(
    new Set(bookInfo.map((book) => book.categoria))
  )];


  return (
    <>
      <div className="ContieneNarvab">
        <h3>Libros con Andres</h3>
        <ul>
          <Link onClick={VolverAincio} id="Inicio" className="ov-btn-slide-left" to="/">
            Inicio
          </Link>
          <li className="ov-btn-slide-left" onClick={mostrarCategorias}>
            Categorias
          </li>
          <li className="ov-btn-slide-left" onClick={mostrarAutores}>
            Autores
          </li>
          <li className="ov-btn-slide-left" onClick={toggleMostrarProductos}>
            carrito
          </li>
        </ul>
      </div>

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
        <ProductosSeleccionados
          allProducts={allProducts}
          toggleMostrarProductos={toggleMostrarProductos}
        />
      )}

      {categoriasList && (
        <div className="custom-list-container">
          <ul className="custom-list">
            {uniqueCategories.map((categoria, index) => (
              <li
                key={index}
                onClick={() => filtrarPorCategoria(categoria)}
                className={categorias === categoria ? "active" : ""}
              >
                {categoria}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Narvab;
