import React, { useState, useEffect } from 'react';
import "./Carrusel.css"
export const Carrusel = ({ bookInfo }) => {
  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagenActual((prevIndex) => (prevIndex + 1) % bookInfo.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [bookInfo.length]);

  return (
    <div className="carousel">
      {bookInfo.map((image, index) => (
        <img
          key={index}
          src={image.image_url}
          alt={`carousel-image-${index}`}
          width={200}
          style={{ display: index === imagenActual ? 'block' : 'none' }}
        />
      ))}
     <p >Descubre los mejores libros al mejor precio<br></br>
Muchos títulos disponibles en distintos categorias y formatos</p>
    </div>
  );
};
