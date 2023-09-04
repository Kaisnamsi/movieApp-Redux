import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import { reset, searchBN, searchBR } from "../js/actions/movieActions";
import "./SearchMovie.css";
const SearchMovie = () => {
  const dispatch = useDispatch();

  let searchedrate = useSelector((state) => state.searchedrate);
  return (
    <div>
      <input type="text" onChange={(e) => dispatch(searchBN(e.target.value))} />
      <Rating
        initialValue={searchedrate ? searchedrate : 0}
        onClick={(rate) => dispatch(searchBR(rate))}
      />
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default SearchMovie;
