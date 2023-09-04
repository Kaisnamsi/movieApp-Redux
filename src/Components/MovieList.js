import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './MovieList.css'
const MovieList = () => {
  const movies = useSelector((state) => state.list);
  const searchedName = useSelector((state) => state.searchedName);
  // console.log(movies);
  let searchedrate = useSelector((state) => state.searchedrate);
  return (
    <>
      {" "}
      <Link to={"/add"}>add</Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {movies
          .filter(
            (el) =>
              el.name.toLowerCase().includes(searchedName.toLowerCase()) &&
              el.rating >= searchedrate
          )
          .map((film) => (
            <MovieCard movie={film} key={film.id} />
          ))}
      </div>
    </>
  );
};

export default MovieList;
