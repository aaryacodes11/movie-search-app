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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  setLoading(true);

  fetch(`https://www.omdbapi.com/?apikey=eccad948&t=${query}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        setMovieData(data);
        setError("");
      } else {
        setMovieData(null);
        setError(data.Error);
      }
      
      setLoading(false);
    });
}, [query]);

function handleSearch() {
  if (search.trim() === "") return;
  setQuery(search);
  setSearch("");
}

  return (
    <div>
      <h1>Movie Search</h1>
      <h2>Count: {count}</h2>

      <input
      type="text"
      placeholder="Search Movies..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
      />

      <button onClick={handleSearch}>
        Search
      </button> 

      {loading && <h2>loading...</h2>}

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
    <p>Genre: {movieData.Genre}</p>
    <p>Runtime: {movieData.Runtime}</p>
    <p>Plot: {movieData.Plot}</p>
  </div>
)}

{error && <h2>❌ {error}</h2>}


     </div>
  );
}


export default App;