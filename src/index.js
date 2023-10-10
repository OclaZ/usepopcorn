import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
import { useState } from "react";

function Test() {
  const [movieRating, setMovieRaing] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRaing} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["Terible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={7} color="red" size={12} defaulRating={3} />
    <Test />
  </React.StrictMode>
);
