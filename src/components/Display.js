import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import DrawerRight from "../components/DrawerRight";

export default function Display(movies) {
  // console.log("movie", movies.movie);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [search, setSearch] = React.useState("");
  
  const handleDrawerOpen = (movie) => {
    setSelectedMovie(movie);
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="float-right text-dark">
        <form action="" className="relative mx-auto w-max">
          <div className="relative flex flex-row items-center">
            <div className="absolute pl-3 z-10">
              <SearchIcon sx={{ color: "#000000" }} />
            </div>
            <input
              type="search"
              className="text-base font-normal peer cursor-pointer relative h-12 w-12 rounded-full pl-12 outline-none focus:w-full focus:cursor-text focus:border focus:border-dark focus:pl-16 focus:pr-4"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
      <Grid container spacing={4} className="font-sans">
        {movies.movie
          .filter(
            (movie) =>
              movie.title_en.toLowerCase().includes(search.toLowerCase()) ||
              movie.director.toLowerCase().includes(search.toLowerCase())
          )
          .map((m) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={2}
              key={m.id}
              onClick={() => handleDrawerOpen(m)}
            >
              <img
                src={m.poster_url}
                alt={m.poster_url}
                className="h-64 rounded-lg"
              />
              <div className="text-base font-bold mt-2">{m.title_en}</div>
              <div className="text-sm font-normal mt-1">{m.director}</div>
            </Grid>
          ))}
      </Grid>
      {isDrawerOpen && (
        <DrawerRight
          handleDrawerClose={handleDrawerClose}
          movie={selectedMovie}
        />
      )}
    </>
  );
}
