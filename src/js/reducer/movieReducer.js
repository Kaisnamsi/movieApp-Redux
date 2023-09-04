// Import necessary action types
import {
  ADDMOVIE,
  GETMOVIEDETAILS,
  SEARCHBYNAME,
  SEARCHBYRATE,
  RESETRATE,
} from "../actionsTypes/movieActions";

// Import your list of movies
import { listmovie } from "../../data";

const initState = {
  list: listmovie,
  movieDetails: null, // Initialize to null
  searchedName: "",
  searchedrate: 0,
};

export const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case ADDMOVIE:
      return {
        ...state,
        list: [
          ...state.list,
          { ...action.payload, id: state.list.length + 1 },
        ],
      };
    case GETMOVIEDETAILS:
      const selectedMovie = state.list.find(
        (movie) => movie.id === action.payload
      );
      return {
        ...state,
        movieDetails: selectedMovie || null,
      };
    case SEARCHBYNAME:
      return { ...state, searchedName: action.payload };
    case SEARCHBYRATE:
      return { ...state, searchedrate: action.payload };
    case RESETRATE:
      return { ...state, searchedrate: 0 };
    default:
      return state;
  }
};
