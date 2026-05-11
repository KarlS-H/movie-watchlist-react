import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

export default function WatchlistPage({ watchlist, onAdd }) {
  if (watchlist.length === 0) {
    return (
      <>
        <header>
          <div id="header-options">
            <h2>My Watchlist</h2>
            <Link to="/">Search for Movies</Link>
          </div>
        </header>
        <div id="watchlist-feed">
          <h2>No movies in your watchlist</h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <header>
          <div id="header-options">
            <h2>My Watchlist</h2>
            <Link to="/">Search for Movies</Link>
          </div>
        </header>
        <div id="watchlist-feed">
          {watchlist.length === 0 ? (
            <h2>No movies in your watchlist</h2>
          ) : (
            watchlist.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                watchlist={watchlist}
                onAdd={onAdd}
              />
            ))
          )}
        </div>
      </>
    );
  }
}
