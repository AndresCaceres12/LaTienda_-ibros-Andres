import React, { useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  const [total, setTotal] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  return (
    <div>
      <Todo total={total} setTotal={setTotal} allProducts={allProducts} setAllProducts={setAllProducts} />
    </div>
  );
};
export default App;
