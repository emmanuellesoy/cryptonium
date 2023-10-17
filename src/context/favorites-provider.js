"use client";

import { useState } from "react";
import { FavoritesContext } from "./favoritesContext";

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
