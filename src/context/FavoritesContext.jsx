import {
  createContext,
  useEffect,
  useState
} from "react";

import useAuth from "../hooks/useAuth";

export const FavoritesContext =
  createContext();

function FavoritesProvider({ children }) {

  const { user } = useAuth();

  const [favorites, setFavorites] =
    useState([]);

  const getFavoritesKey = () => {

    return user
      ? `favorites_${user.nombre}`
      : "favorites_guest";

  };

  useEffect(() => {

    const saved =
      localStorage.getItem(
        getFavoritesKey()
      );

    if (saved) {

      setFavorites(
        JSON.parse(saved)
      );

    } else {

      setFavorites([]);

    }

  }, [user]);

  useEffect(() => {

    localStorage.setItem(
      getFavoritesKey(),
      JSON.stringify(favorites)
    );

  }, [favorites, user]);

  const addFavorite = (game) => {

    const exists =
      favorites.find(
        item => item.id === game.id
      );

    if (exists) return;

    setFavorites([
      ...favorites,
      game
    ]);

  };

  const removeFavorite = (id) => {

    setFavorites(
      favorites.filter(
        game => game.id !== id
      )
    );

  };

  const isFavorite = (id) => {

    return favorites.some(
      game => game.id === id
    );

  };

  return (

    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
      }}
    >

      {children}

    </FavoritesContext.Provider>

  );

}

export default FavoritesProvider;