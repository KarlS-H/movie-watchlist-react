import { useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

export default function SearchBar({ watchlist, onAdd }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  let handleChange = (e) => setQuery(e.target.value);

  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    setError("");
    setLoading(true);
    let movieSearch = query.trim();
    const apiKey = import.meta.env.VITE_PUBLIC_OMDB_KEY;
    try {
      const searchResponse = await fetch(
        `https://www.omdbapi.com/?s=${movieSearch}&type=movie&apikey=${apiKey}`,
      );
      const searchData = await searchResponse.json();

      if (searchData.Response !== "True") {
        setError(searchData.Error);
      } else {
        setError("");
        setMovies(searchData.Search ?? []);
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
    // console.log(searchData.Response);
  }

  return (
    <>
      <header>
        <div id="header-options">
          <h2>Find your film</h2>
          <Link to="/watchlist">Watchlist ({watchlist.length})</Link>
        </div>
      </header>
      <div id="search-bar">
        <label htmlFor="movie-search"></label>
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchMovies();

              // console.log("enter is pressed");
            }
          }}
          onChange={handleChange}
          type="search"
          name="movie-search"
          placeholder="Search for a movie"
          id="movie-search"
        />
        <button
          type="button"
          form="movie-search-form"
          id="search-button"
          onClick={fetchMovies}
          disabled={loading}
        >
          Search
        </button>
        {/* <h1>Movie Searched: {query}</h1> */}
      </div>

      <div>
        {error !== "" ? <h2>{error}</h2> : null}
        {loading === true ? (
          <h2>Fetching results</h2>
        ) : (
          movies.map((movie) => (
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
