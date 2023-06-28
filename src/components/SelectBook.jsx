import React from 'react'
import { useParams } from 'react-router-dom';
export const SelectBook = () => {
     const { index } = useParams();
  const movie = Pelis[index];
  return (
    <div>


    </div>
  )
}
