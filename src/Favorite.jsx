import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ShortCard from "./ShortCard";

function Favorite() {
  const [favMovieArr, setFavMovieArr] = useState(
    JSON.parse(localStorage.getItem("movieArr")) || []
  );

  return (
    <main>
      <Navbar />
      {favMovieArr.length > 0 ? (
        <ul>
          {favMovieArr.map((movieInfo) => {
            return (
              <ShortCard
                setFavMovieArr={setFavMovieArr}
                favMovieArr={favMovieArr}
                movieInfo={movieInfo}
              ></ShortCard>
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
