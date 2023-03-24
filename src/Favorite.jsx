import React from "react";

import Navbar from "./Navbar";

function Favorite() {
  const [favMovieArr, setFavMovieArr] = React.useState(
    JSON.parse(localStorage.getItem("movieArr")) || []
  );

  React.useEffect(() => {
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

  return (
    <main>
      <Navbar />
      {favMovieArr.length > 0 ? (
        <ul>
          {favMovieArr.map((movieInfo) => {
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
      ) : (
        <h1>There is no favorite movies</h1>
      )}
    </main>
  );
}

export default Favorite;
