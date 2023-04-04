import React, { useState, useEffect } from "react";
import Display from "../components/Display";

export default function MovieFinder() {
  const [movies, setMovies] = useState([]);
  const getMoviesRequest = async () => {
    const url = "https://www.majorcineplex.com/apis/get_movie_avaiable";
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log("responseJson", responseJson.movies);
    setMovies(responseJson.movies);
  };

  useEffect(() => {
    getMoviesRequest();
  }, []);

  return (
    <>
      <div className="text-3xl font-sans font-semibold mb-5 flex-row">Movie Finder
      <Display movie={movies} />
      </div>
    </>
  );
}
