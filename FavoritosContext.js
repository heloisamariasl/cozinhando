import React, { createContext, useState } from 'react';

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  function adicionarFavorito(receita) {
    setFavoritos(prev => [...prev, receita]);
  }

  function removerFavorito(id) {
    setFavoritos(prev => prev.filter(item => item.id !== id));
  }

  function estaFavorito(id) {
    return favoritos.some(item => item.id === id);
  }

  return (
    <FavoritosContext.Provider
      value={{ favoritos, adicionarFavorito, removerFavorito, estaFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}
