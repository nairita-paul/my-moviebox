import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import { getMovieBySearch } from "./apiCalls";
import ShortCard from "./ShortCard";

function App() {
  const [input, setInput] = React.useState("");

  const [favMovieArr, setFavMovieArr] = useState(
    JSON.parse(localStorage.getItem("movieArr")) || []
  );

  const [data, setData] = React.useState({ Search: [] });

  const [isError, setIsError] = React.useState(false);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function fetchAPI() {
    getMovieBySearch(input).then((data) => {
      if (data.Search) {
        setIsError(false);
        setData(data);
      } else {
        setIsError(true);
      }
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
            <ShortCard
              setFavMovieArr={setFavMovieArr}
              favMovieArr={favMovieArr}
              movieInfo={movieInfo}
            ></ShortCard>
          );
        })}
      </ul>
      {isError && <p>NO movie found</p>}
    </main>
  );
}

export default App;
