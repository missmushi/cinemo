import React from "react";
import { useFavoriteContext } from "../contexts/FavoriteContext";
import Display from "../components/Display";

export default function FavoriteMovies() {
  const {favorite} = useFavoriteContext()
  console.log("from favorite", favorite)

  return (
    <div>
      <div className="text-3xl font-sans font-semibold mb-5 flex-row">My Favorite
      <Display movie={favorite}/>
      </div>
    </div>
  );
};


