import { useEffect, useState } from "react";

export default function MovieCard({ movie, onAdd, watchlist }) {
  const apiKey = import.meta.env.VITE_PUBLIC_OMDB_KEY;
  const [idData, setIdData] = useState(null);

  useEffect(() => {
    // setLoading(true);
    // console.log(loading);
    fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setIdData(data));
  }, [movie.imdbID]);

  const isMovieSaved =
    Array.isArray(watchlist) &&
    watchlist.some((saved) => saved.imdbID === movie?.imdbID);

  if (!idData) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <article>
        <div className="movie">
          <figure className="movie-image">
            <img
              className="image"
              src={movie.Poster}
              alt={`Movie poster for ${movie.Title}`}
            />
          </figure>

          <div className="movie-bio">
            <header>
              <h2 className="movie-title">{movie.Title}</h2>
              <i className="fa-solid fa-star" aria-hidden="true"></i>
              <p className="movie-rating">
                {idData.Ratings?.[0]?.Value || "N/A"}
              </p>
            </header>

            <div className="movie-details">
              <div className="length-genres-watchlist">
                <div className="runtime">{idData.Runtime || "N/A"}</div>
                <div className="genre">{idData.Genre || "N/A"}</div>
                <button
                  className="watchlist-btn"
                  data-imdb-id={movie.imdbID}
                  onClick={() => {
                    onAdd(movie);
                  }}
                >
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
      </article>
    </>
  );
}
