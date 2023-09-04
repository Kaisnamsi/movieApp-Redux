import "./App.css";
import SearchMovie from "./Components/SearchMovie";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/add" element={<AddMovie />} />
        <Route
          path="/"
          element={
            <div>
              <SearchMovie />
              <MovieList />
            </div>
          }
        />
        <Route path="/details/:idmovie" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
