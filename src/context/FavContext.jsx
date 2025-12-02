import { createContext, useState, useEffect } from "react";

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favData = localStorage.getItem("favData");

    if (favData) {
      try {
        setFavorites(JSON.parse(favData));
      } catch (e) {
        console.error("Invalid JSON in localStorage:", e);
      }
    }
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favData", JSON.stringify(favorites));
    }
  }, [favorites]);

  const addToFav = (meal) => {
    setFavorites((prev) => [...prev, meal]);
  };

  const removeFromFav = (id) => {
    setFavorites((prev) => prev.filter((item) => item.idMeal !== id));
  };

  const isFav = (id) => {
    return favorites.some((item) => item.idMeal === id);
  };

  return (
    <FavContext.Provider value={{ favorites, addToFav, removeFromFav, isFav }}>
      {children}
    </FavContext.Provider>
  );
};
