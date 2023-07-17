import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import ContextBooks from "./components/ContextBooks";
const App = () => {
  const [total, setTotal] = useState(window.localStorage.getItem("Totalpagar"));

  const [allProducts, setAllProducts] = useState(() => {
    if (typeof window !== "undefined") {
      const productosString = window.localStorage.getItem("ProductosCarrito2");
      return productosString ? JSON.parse(productosString) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const productosString = JSON.stringify(allProducts);
      window.localStorage.setItem("ProductosCarrito2", productosString);
    }
  }, [allProducts]);

  return (
    <ContextBooks>
        <div>
      <Todo
        total={total}
        setTotal={setTotal}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
      />
    </div>
    </ContextBooks>
  
  );
};

export default App;
