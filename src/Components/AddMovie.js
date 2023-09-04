import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addmovie } from "../js/actions/movieActions";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setform] = useState({
    image: "",
    rating: 0,
    name: "",
    date: "",
    desc: "",
    trailer: "",
  });
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.image || !form.trailer) {
      return alert("remplir les cases vides");
    }
    dispatch(addmovie(form));
    navigate("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Poster Url</label>
          <input
            type="url"
            value={form.image}
            name="image"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Rate</label>
          <input
            type="number"
            value={form.rating}
            name="rating"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Descreption</label>
          <input
            type="text"
            value={form.desc}
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Trailer</label>
          <input
            type="text"
            value={form.trailer}
            name="trailer"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={form.date}
            name="date"
            onChange={handleChange}
          />
        </div>
        <button>Save Changes</button>
      </form>
    </>
  );
}
export default AddMovie;
