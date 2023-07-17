import React, { useState } from 'react';

const booksContext = React.createContext();
const inputContext = React.createContext();

export function useBooksContext() {
  return React.useContext(booksContext);
}

export function useinputContext() {
  return React.useContext(inputContext);
}

const ContextBooks = ({ children }) => {
  const [search, setsearch] = useState('');
  const [LibrosBuscados, setLibrosBuscados] = useState([]);

  return (
    <div>
      <booksContext.Provider value={{ search, setsearch }}>
        <inputContext.Provider value={{ LibrosBuscados, setLibrosBuscados }}>
          {children}
        </inputContext.Provider>
      </booksContext.Provider>
    </div>
  );
};

export default ContextBooks;
