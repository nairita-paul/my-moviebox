import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  const [input, setInput] = React.useState("");

  const [favMovieArr, setFavMovieArr] = useState(
    JSON.parse(localStorage.getItem("movieArr")) || []
  );

  const [data, setData] = React.useState({ Search: [] });

  useEffect(() => {
    localStorage.setItem("movieArr", JSON.stringify(favMovieArr));
  }, [favMovieArr]);

  function handleAddFav(movieInfo) {
    if (!isFavorite(movieInfo.imdbID)) {
      addFavMovie(movieInfo);
    } else {
      removeFavMovie(movieInfo.imdbID);
    }
  }

  function addFavMovie(movieInfo) {
    setFavMovieArr((prevFavMovieArr) => {
      return [...prevFavMovieArr, movieInfo];
    });
  }
  function removeFavMovie(id) {
    setFavMovieArr((prevFavMovieArr) => {
      return prevFavMovieArr.filter((favMovie) => favMovie.imdbID != id);
    });
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  function isFavorite(id) {
    for (let i = 0; i < favMovieArr.length; i++) {
      if (favMovieArr[i].imdbID === id) {
        return true;
      }
    }
    return false;
  }
  function fetchAPI() {
    fetch(
      `http://www.omdbapi.com/?s=${input}&apikey=${
        import.meta.env.VITE_OMDBAPIKEY
      }&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  return (
    <main>
      <Navbar />
      <input
        className="inputField"
        type="text"
        placeholder="Enter your favourite movie !"
        value={input}
        onChange={handleChange}
      />
      <button className="search-btn" onClick={fetchAPI}>
        Search here
      </button>
      <ul>
        {data.Search.map((movieInfo) => {
          return (
            <li key={movieInfo.imdbID} className="card">
              <img src={movieInfo.Poster} className="movie-poster-img"></img>
              <div className="poster-info">
                <p>Title: {movieInfo.Title}</p>
                <p>Year: {movieInfo.Year}</p>
                <p>Type: {movieInfo.Type}</p>
              </div>
              <button
                className={isFavorite(movieInfo.imdbID) ? "favorite" : ""}
                onClick={() => handleAddFav(movieInfo)}
              >
                Add To Favorites
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
