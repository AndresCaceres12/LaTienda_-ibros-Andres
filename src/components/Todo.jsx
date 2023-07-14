import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { RenderizarLibros } from "./RenderizarLibros";
import Apartado from "./Apartado";
import Footer from "./Footer";
import Pago from "./Pagos";
import Modal from "./Modal";
import { useEffect, useState } from "react";

function Todo({ total, setTotal, allProducts, setAllProducts }) {
  let books =
    "9780140328721,9780064404990,9780142407332,9780064401883,9780439064873,9780064408653,9780439136365,9780439554930,9780545010221,9780439358071,9780545582889,9780064400809,9780064400564,9780064400557,9780064400816,9780064400823,9780064400830,9780064400854,9780064400861,9780064400870,9780439554939,9781408857885,9780553381689,9781439192566,9781594204876,9781481424387,9780262518819,9789751022226,9783753176529,9781250249296,9780545599764,9782709642521,9780370332284,9780345342966";

  const [bookInfo, setBookInfo] = useState([]);
  const [Cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const generateRandomPrices = () => {
      const storedPrices = localStorage.getItem("bookPrices");
      if (storedPrices) {
        return JSON.parse(storedPrices);
      } else {
        const prices = [];
        for (let i = 0; i < books.length; i++) {
          const price = randomNumberInRange(50000, 100000);
          prices.push(price);
        }
        localStorage.setItem("bookPrices", JSON.stringify(prices));
        return prices;
      }
    };

    const bookPrices = generateRandomPrices();

    const fetchBooks = async () => {
      const response = await axios.get(
        `https://openlibrary.org/api/books?bibkeys=ISBN:${books}&format=json&jscmd=data`
      );
      const data = response.data;
      console.log(data);
      const bookData = Object.values(data);
      const bookDataWithPrices = bookData.map((book, index) => {
        return {
          ...book,
          precio: bookPrices[index],
          cantidad: Cantidad,
        };
      });

      setBookInfo(bookDataWithPrices);
    };

    fetchBooks();
  }, []);

  const randomNumberInRange = (min, max) => {
    const random = Math.random() * (max - min) + min;
    const rounded = Math.round(random);
    const formatted = rounded.toLocaleString("es", {
      useGrouping: true,
      maximumFractionDigits: 0,
    });
    return formatted;
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RenderizarLibros
              Cantidad={Cantidad}
              setCantidad={setCantidad}
              bookInfo={bookInfo}
              setBookInfo={setBookInfo}
              total={total}
              setTotal={setTotal}
              setAllProducts={setAllProducts}
              allProducts={allProducts}
            />
          }
        />
        <Route
          path="/libro/:index"
          element={<Apartado bookInfo={bookInfo} />}
        />
        <Route
          path="/Pagos"
          element={
            <Pago
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
            />
          }
        />
        <Route
          path="/Pago-Realizado"
          element={<Modal setAllProducts={setAllProducts} />}
        />
      </Routes>
      {bookInfo.length > 1 && <Footer />}
    </>
  );
}

export default Todo;
