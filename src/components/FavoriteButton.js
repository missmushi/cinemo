import React from "react";
import { useFavoriteContext } from "../contexts/FavoriteContext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';

const Button = ({ movie }) => {
  const { addFavorite } = useFavoriteContext();
  const { favorite } = useFavoriteContext();
  const isMovieAlreadyFavorite = favorite.some(
    (favMovie) => favMovie.id === movie.id
  );

  return (
    <button onClick={() => addFavorite(movie, isMovieAlreadyFavorite)}>
      {isMovieAlreadyFavorite ?  <FavoriteIcon sx={{ color: red[700] }}/>: <FavoriteBorderIcon />}
    </button>
  );
};

export default Button;
