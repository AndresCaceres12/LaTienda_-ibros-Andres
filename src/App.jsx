import React, { useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  const [total, setTotal] = useState(0);
  return (
    <div>
      <Todo total={total} setTotal={setTotal} />
    </div>
  );
};
export default App;
