import React from 'react'
import { useBooksContext,useinputContext } from './ContextBooks'
const ResultadoBusqueda = () => {
    const { search, setsearch } = useBooksContext(); 
    const { LibrosBuscados, setLibrosBuscados } = useinputContext()
    console.log(search)
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
  return (
    <div>tu busqueda fie {search}</div>
  )
}

export default ResultadoBusqueda