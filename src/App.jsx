import { useState, useEffect } from "react";
import "./App.css";

function Movie(props) {

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.year}</p>
    </div> 
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const [movieData, setMovieData] = useState(null);

  const movies = [
    {title: "Batman", year:2008},
    {title: "Avengers", year:2012},
    {title: "Iron Man", year:2008},
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
);

useEffect(() => {
  if (search.trim() === "") return;

  fetch(`https://www.omdbapi.com/?apikey=eccad948&t=${query}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setMovieData(data);
    });
}, [query]);

  return (
    <div>
      <h1>Movie Search</h1>
      <h2>Count: {count}</h2>

      <input
      type="text"
      placeholder="Search Movies..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setQuery(search)}>
        Search
      </button> 

      {movieData && movieData.Response === "True" && (
  <div>
    <h2>{movieData.Title}</h2>
    <img
      src={movieData.Poster}
      alt={movieData.Title}
      width="200"
    />
    <p>Year: {movieData.Year}</p>
    <p>IMDb Rating: {movieData.imdbRating}</p>
  </div>
)}

     </div>
  );
}


export default App;