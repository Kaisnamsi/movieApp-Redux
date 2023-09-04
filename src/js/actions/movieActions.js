import {
  ADDMOVIE,
  GETMOVIEDETAILS,
  RESETRATE,
  SEARCHBYNAME,
  SEARCHBYRATE,
} from "../actionsTypes/movieActions";

export const addmovie = (newmovie) => {
  return {
    type: ADDMOVIE,
    payload: newmovie,
  };
};
export const getMovie = (idmovie) => {
  return {
    type: GETMOVIEDETAILS,
    payload: idmovie,
  };
};
export const searchBN = (name) => {
  return {
    type: SEARCHBYNAME,
    payload: name,
  };
};
export const searchBR = (rate) => {
  return {
    type: SEARCHBYRATE,
    payload: rate,
  };
};
export const reset = () => {
  return {
    type: RESETRATE,
  };
};
