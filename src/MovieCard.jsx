function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
      />

      <h2>{movie.Title}</h2>

      <p><strong>📅 Year:</strong> {movie.Year}</p>
      <p><strong>⭐ IMDb:</strong> {movie.imdbRating}</p>
      <p><strong>🎭 Genre:</strong> {movie.Genre}</p>
      <p><strong>⏱ Runtime:</strong> {movie.Runtime}</p>
      <p><strong>🎬 Director:</strong> {movie.Director}</p>
      <p><strong>🎭 Actors:</strong> {movie.Actors}</p>
      <p><strong>📝 Plot:</strong> {movie.Plot}</p>
    </div>
  );
}

export default MovieCard;