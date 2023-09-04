import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getMovie } from "../js/actions/movieActions";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { idmovie } = useParams();
  const film = useSelector((state) => state.movieDetails);

  // Inside MovieDetails.js
  useEffect(() => {
    // Dispatch the getMovie action when the component mounts
    dispatch(getMovie(idmovie));

    // Optionally, you can return a cleanup function if needed
    return () => {
      // Perform cleanup (if necessary)
    };
  }, [dispatch, idmovie]);

  // Check if film is loading or if movie details are available
  const isLoading = !film;
  
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{film.name}</h1>
          <p>{film.desc}</p>
          <iframe
            width="560"
            height="315"
            src={film.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <Link to="/">
            <button variant="primary">Go Back</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
