import React, { useEffect, useState } from "react";
import Narvab from "./Narvab";
import "./RenderizarLibros.css";
import { Carrusel } from "./Carrusel";
import { Link } from "react-router-dom";

export const RenderizarLibros = () => {
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
  ];

  const [bookInfo, setBookInfo] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [EsconderCarro, setEscondercarro] = useState(false);
  const [selectedlibro, setSelectedlibro] = useState(null);
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

          return {
            title: title,
            author: author,
            image_url: image_url,
            categoria: categoria,
            precio: randomNumberInRange(50000, 200000),
          };
        })
      );

      setBookInfo(bookData.filter((book) => Object.keys(book).length > 0));
    };

    fetchBooks();
  }, []);

  const filteredBooks = categorias.length
    ? bookInfo.filter((book) => book.categoria === categorias)
    : bookInfo;

  const onAddProduct = (product) => {
    setAllProducts([...allProducts, product]);
  };
  const handlelibroClick = (libro) => {
    console.log("click");
    setSelectedlibro(libro);
  };
  return (
    <div>
      <Narvab
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        bookInfo={bookInfo}
        categorias={categorias}
        setCategorias={setCategorias}
        onAddProduct={onAddProduct}
        setMostrarCarrito={setEscondercarro}
      />

      <Carrusel bookInfo={bookInfo} />
      {filteredBooks.length > 0 && (
        <div className="container">
          <div className="row">
            {filteredBooks.map((book, index) => (
              <div key={index} className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Titulo: {book.title}</h5>
                    <Link to={`/libro/${book.index}`}>
                      {" "}
                      {book.image_url ? (
                        <img src={book.image_url} alt="" />
                      ) : (
                        <span>No hay imagen disponible</span>
                      )}
                    </Link>
                    <p className="card-text">Autor: {book.author}</p>
                    <p>Precio : ${book.precio}</p>
                  </div>
                  <button className="add-to-cart-btn">
                    <i className="fas fa-shopping-cart"></i>
                    <span onClick={() => onAddProduct(book)}>
                      Añadir al carrito
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
