import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (query.trim() === "") return;

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
      })
      .catch(() => {
        setMovieData(null);
        setError("Something went wrong.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  function handleSearch() {
    const trimmedSearch = search.trim();

    if (trimmedSearch === "") return;

    setQuery(trimmedSearch);

    setHistory((prevHistory) =>
       [
      trimmedSearch,
      ...prevHistory.filter(
        (item) => item.toLowerCase() !== trimmedSearch.toLowerCase()
      ),
       ].slice(0, 5)
    );

    setSearch("");
  }

  return (
    <div>
      <h1>Movie Search</h1>

      <input
        type="text"
        placeholder="Search your favourite movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      {loading && <h2>Loading...</h2>}

      {error && <h2>❌ {error}</h2>}

      <h3>Recent Searches</h3>

      {history.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      {movieData && <MovieCard movie={movieData} />}
    </div>
  );
}

export default App;