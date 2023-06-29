import React from 'react';
import { useParams } from 'react-router-dom';

const Apartado = (props) => {
  const { bookInfo } = props
  const { index } = useParams();

console.log(props)
  const selectedBook = bookInfo[index];

  if (!selectedBook) {
    return <div>Libro no encontrado</div>;
  }

  return (
    <div>
      <h2>{selectedBook.title}</h2>
      <p>Autor: {selectedBook.author}</p>
      <img src={selectedBook.image_url} alt={selectedBook.title} />
      <p>Precio: ${selectedBook.precio}</p>
    </div>
  );
}

export default Apartado;
