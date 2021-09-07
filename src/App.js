import { useState } from "react";
import "./App.css";

export default function App() {
  var seriesData = {
    Shounen: [
      { name: "Naruto", rating: "10/10" },
      { name: "Dragon Ball Super", rating: "9.5/10" },
      { name: "One piece", rating: "9/10" },
    ],
    Isekai: [
      { name: "OverLord", rating: "10/10" },
      { name: "OverCautious Hero", rating: "9.5/10" },
      { name: "That time i got reincarted as a slime", rating: "9.5/10" },
    ],
    Thriller: [
      { name: "Sword art Online", rating: "10/10" },
      { name: "Death Note", rating: "9.9/10" },
      { name: "Erased", rating: "9.4/10" },
    ],
    Trending: [
      { name: "God Of High School", rating: "10/10" },
      { name: "Tower Of God", rating: "9.7/10" },
      { name: "Jujutsu Kaisen", rating: "9.5/10" },
    ],
  };

  var containerCenter = {
    maxWidth: "500px",
    margin: "1rem auto",
  };

  var buttonStyle = {
    cursor: "pointer",
    background: "white",
    borderRadius: "0.5rem",
    padding: "0.5rem 1.2rem 0.5rem 1.2rem",
    boxShadow: "0 1px 10px rgba(146,161,176,.15)",
    border: "none",
    marginLeft: "1rem",
    marginTop: "1rem",
  };

  var listStyle = {
    listStyle: "none",
    padding: "1rem",
    // border: "1px solid #D1D5DB",
    boxShadow: "0 1px 4px rgba(146,161,176,.15)",
    width: "80%",
    margin: "1rem 1rem",
    borderRadius: "0.5rem",
    background: "white",
  };

  var heading = {
    fontSize: "20px",
  };

  var onClickHandler = (type) => {
    setGenere(type);
  };

  var [genere, setGenere] = useState("Shounen");

  return (
    <div className="App">
      <nav>
        <h1>AnimeMojo</h1>
      </nav>
      <div style={containerCenter}>
        <p>Checkout My favorite Anime List.Select a genre</p>
        <div>
          {Object.keys(seriesData).map((type) => (
            <button style={buttonStyle} onClick={() => onClickHandler(type)}>
              {type}
            </button>
          ))}
        </div>

        <div
          style={{ textAlign: "left", margin: "0px auto", marginTop: "1.5rem" }}
        >
          <ul style={{}}>
            {seriesData[genere].map((item) => (
              <li style={listStyle}>
                <div style={heading}>{item.name}</div>
                <div>{item.rating}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
