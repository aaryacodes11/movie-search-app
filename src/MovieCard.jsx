function MovieCard({ movie }) {
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />

      <h2>{movie.Title}</h2>

      <p>📅 Year: {movie.Year}</p>
      <p>⭐ IMDb Rating: {movie.imdbRating}</p>
      <p>🎭 Genre: {movie.Genre}</p>
      <p>⏱ Runtime: {movie.Runtime}</p>
      <p>📝 Plot: {movie.Plot}</p>
    </div>
  );
}

export default MovieCard;