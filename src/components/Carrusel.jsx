import React, { useState, useEffect } from "react";
import "./Carrusel.css";
export const Carrusel = () => {
  const [imagenActual, setImagenActual] = useState(0);
  const img = [
    {
      img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F780A71F1F76A6E2D73EDB1E39B286215E1034613B9DDCC0E99C8D9ECCBE33AD/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {
      img: "https://imgix.bustle.com/rehost/2016/9/13/9b7350c3-402d-4ead-8532-ccc36a80cc38.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
    },
    {
      img: "https://m.media-amazon.com/images/I/41-pbtYjpZL._SL10_UR1600,800_CR200,50,1024,512_CLa%7C1024,512%7C41-pbtYjpZL.jpg%7C0,0,1024,512+67,67,376,376_PJAdblSocialShare-Gradientoverlay-twitter-largeasin-0to60,TopLeft,0,0_PJAdblSocialShare-AudibleLogo-Medium,TopLeft,490,223_OU01_ZBLISTENING%20ON,483,152,55,450,AudibleSansMd,32,255,255,255.jpg",
    },
    {
      img: "https://i0.wp.com/www.irinadelgado.com/wp-content/uploads/2020/04/irina-delgado-libro-La-regla-de-oro-opinion.jpg?fit=680%2C340&ssl=1",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setImagenActual((prevIndex) => (prevIndex + 1) % img.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [img.length]);

  return (
    <div className="carousel">
      {img.map((image, index) => (
        <img
          key={index}
          src={image.img}
          alt={`carousel-image-${index}`}
          width={200}
          style={{ display: index === imagenActual ? "block" : "none" }}
        />
      ))}
      <p>
        Descubre los mejores libros al mejor precio<br></br>
        Muchos títulos disponibles en distintos categorias y formatos
      </p>
    </div>
  );
};
