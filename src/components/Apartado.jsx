import React from 'react'
import { useParams } from 'react-router-dom';
const Apartado = ({bookInfo}) => {
  const { index } = useParams();
  const movie = bookInfo[index];
  if (!movie) {
    return <div></div>;
  }

  console.log(bookInfo)
  return (
    <div>
      <div className='DescripcionP'>
      <h2> Titulo : {movie.title}</h2>
   
      </div> 
    </div>
  )
}

export default Apartado