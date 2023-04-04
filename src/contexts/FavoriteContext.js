import React, { createContext, useReducer, useContext } from "react";
import reducer from "./FavoriteReducer";

const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  const initialState = {
    favorite: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const addFavorite = (movie, isAlreadyFavorite) => {
    if (isAlreadyFavorite) {
      dispatch({
        type: "Remove_from_Favorite",
        payload: { movie },
      });
    } else {
      dispatch({
        type: "Add_to_Favorite",
        payload: { movie },
      });
    }
  };

  return (
    <FavoriteContext.Provider value={{ ...state, addFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};

export { FavoriteContextProvider, useFavoriteContext };
