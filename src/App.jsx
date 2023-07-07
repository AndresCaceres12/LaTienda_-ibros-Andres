import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  const [total, setTotal] = useState(0);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Recuperar el valor de 'total' desde el localStorage al cargar la página
    const storedTotal = localStorage.getItem("totalApagar");
    if (storedTotal) {
      setTotal(JSON.parse(storedTotal));
    }
  }, []);

  useEffect(() => {
    // Guardar el valor de 'total' en el localStorage cada vez que cambie
    localStorage.setItem("totalApagar", JSON.stringify(total));
  }, [total]);

  return (
    <div>
      <Todo
        total={total}
        setTotal={setTotal}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
      />
    </div>
  );
};

export default App;
