import React from "react";

const FavoriteReducer = (state, action) => {
  if (action.type === "Add_to_Favorite") {
    let { movie } = action.payload;
    console.log("product it is", movie);

    const isMovieAlreadyFavorite = state.favorite.some(
      (favMovie) => favMovie.id === movie.id
    );

    if (!isMovieAlreadyFavorite) {
      return {
        ...state,
        favorite: [...state.favorite, movie],
      };
    }
  } else if (action.type === "Remove_from_Favorite") {
    let { movie } = action.payload;
    console.log("product it is", movie);

    return {
      ...state,
      favorite: state.favorite.filter((favMovie) => favMovie.id !== movie.id),
    };
  }

  return state;
};

export default FavoriteReducer;
