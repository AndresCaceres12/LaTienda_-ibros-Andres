import React from "react";
import NavbarCarrito from "./NavbarCarrito";

const Carrito = ({ allProducts }) => {
  // Recibir la prop allProducts
  console.log(allProducts);
  return (
    <div>
      <NavbarCarrito />
      <h1>Carrito</h1>

      {allProducts && allProducts.length > 0 ? ( // Verificar si la prop allProducts existe y tiene elementos
        allProducts.map((product, index) => (
          <ul key={index}>
            <li>{product.title}</li>
          </ul>
        ))
      ) : (
        <p>No hay productos en el carrito</p> // Mostrar un mensaje si no hay productos
      )}
    </div>
  );
};

export default Carrito;
