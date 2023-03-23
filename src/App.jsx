import React from "react";
import "./App.css";
import img1 from "./assets/pic1.jpg";
// import Input from "./Input";
function inputBtnClick() {}

function App() {
  return (
    <main>
      <input
        className="inputField"
        type="text"
        placeholder="Enter your favourite movie !"
      />
      <button className="input-btn" onClick={inputBtnClick}>
        Search here
      </button>
      <ul>
        <li>
          <img src={img1} alt="fav-movie" className="movie-poster-img"></img>
          <p>Title : Adventour of life</p>
          <p>Genre : Travel</p>
          <p>Director : A K Thomson</p>
        </li>
        <li>
          <img src={img1} alt="fav-movie" className="movie-poster-img"></img>
          <p>Title : Journey of Life</p>
          <p>Genre : Travel</p>
          <p>Director : A K Thomson</p>
        </li>
      </ul>
    </main>
  );
}

export default App;
