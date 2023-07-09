import { Routes, Route } from "react-router-dom";
import { RenderizarLibros } from "./RenderizarLibros";
import Apartado from "./Apartado";
import Footer from "./Footer";
import Pago from "./Pagos";
import { useEffect, useState } from "react";


function Todo({ total, setTotal, allProducts, setAllProducts }) {
  let books = [
    "9780140328721",
    "9780064404990",
    "9780142407332",
    "9780064401883",
    "9780439064873",
    "9780064408653",
    "9780439136365",
    "9780439554930",
    "9780545010221",
    "9780439358071",
    "9780545582889",
    "9780064400809",
    "9780064400564",
    "9780064400557",
    "9780064400816",
    "9780064400823",
    "9780064400830",
    "9780064400854",
    "9780064400861",
    "9780064400870",
    "9780439554939",
    "9781408857885",
    "9780553381689",
    "9781439192566",
    "9781594204876",
    "9781481424387",
    "9780262518819",
    "9789751022226",
    "9783753176529",
    "9781250249296",
    "9780545599764",
   "9782709642521",
    "9780370332284",
    "9780345342966",
  ];

  const [bookInfo, setBookInfo] = useState([]);
const [Cantidad, setCantidad] = useState(1)

  const randomNumberInRange = (min, max) => {
    const random = Math.random() * (max - min) + min;
    const rounded = Math.round(random);
    const formatted = rounded.toLocaleString("es", {
      useGrouping: true,
      maximumFractionDigits: 0,
    });
    return formatted;
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await Promise.all(
        books.map(async (isbn) => {
          const response = await fetch(
            `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
          );
          const data = await response.text();
          const book = JSON.parse(data)[`ISBN:${isbn}`];

          if (!book) {
            return {};
          }

          const title = book.title;
          const author = book.authors[0]?.name || "Autor Desconocido";

          const image_url = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
          const categoria = book.subjects[0]?.name;

          const publisher = book.publishers[0]?.name;
          const publish_date = book.publish_date;
          const number_of_pages = book.number_of_pages;
          const description = book.description?.value;
const Precio = randomNumberInRange(50000, 120000);

          return {
            title: title,
            author: author,
            image_url: image_url,
            categoria: categoria,
            precio: Precio,
            cantidad : Cantidad,
            publisher: publisher,
            publish_date: publish_date,
            number_of_pages: number_of_pages,
            description: description,
          };
        })
      );
     
    
      setBookInfo(bookData.filter((book) => Object.keys(book).length > 0));
    };

    fetchBooks();
  }, []);
  useEffect(() => {
    localStorage.setItem("totalApagar", JSON.stringify(total));
  }, [total]);
  useEffect(() => {
    const storedTotal = localStorage.getItem("totalApagar");
    if (storedTotal) {
      setTotal(JSON.parse(storedTotal));
    }
  }, []);
    
console.log(bookInfo)
localStorage.setItem("Precio", JSON.stringify(bookInfo));
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
          element={<Pago  
            setAllProducts={setAllProducts}
            total={total} setTotal={setTotal} />}
        />
      </Routes>
     {bookInfo.length > 1 && (
 <Footer />
     )}
     
    </>
  );
}

export default Todo;
