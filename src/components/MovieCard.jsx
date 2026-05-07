import { useEffect, useState } from "react";

export default function MovieCard({ movie }) {
  const apiKey = import.meta.env.VITE_PUBLIC_OMDB_KEY;
  const [idData, setIdData] = useState(null);
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setIdData(data));
  }, [movie.imdbID]);

  const storedWatchlist = localStorage.getItem("watchlist");
  const isMovieSaved = storedWatchlist?.some(
    (saved) => saved.imdbID === movie.imdbID,
  );

  if (!idData) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="movie">
        <div className="movie-image">
          <img className="image " src={movie.Poster} />
        </div>

        <div className="movie-bio">
          <div className="title-rating">
            <p className="movie-title">{movie.Title}</p>
            <i className="fa-solid fa-star"></i>
            <p className="movie-rating">
              {idData.Ratings?.[0]?.Value || "N/A"}
            </p>
          </div>

          <div className="movie-details">
            <div className="length-genres-watchlist">
              <div className="runtime">{idData.Runtime || "N/A"}</div>
              <div className="genre">{idData.Genre || "N/A"}</div>
              <button className="watchlist-btn" data-imdb-id={movie.imdbID}>
                {isMovieSaved ? (
                  <>
                    <i className="fa-solid fa-circle-minus" /> Remove
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-circle-plus" /> Watchlist
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="film-description">
            <p>{idData.Plot || "No description available"}</p>
          </div>
        </div>
      </div>
      <hr className="bottom-line" />
    </>
  );
}
