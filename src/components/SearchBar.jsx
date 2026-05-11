import { useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

export default function SearchBar({ watchlist, onAdd }) {
  const [query, setQuery] = useState("");
  function handleChange(e) {
    setQuery(e.target.value);
  }

  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    let movieSearch = query.trim();
    const apiKey = import.meta.env.VITE_PUBLIC_OMDB_KEY;

    const searchResponse = await fetch(
      `https://www.omdbapi.com/?s=${movieSearch}&type=movie&apikey=${apiKey}`,
    );

    const searchData = await searchResponse.json();
    setMovies(searchData.Search ?? []);
  }

  return (
    <>
      <header>
        <div id="header-options">
          <h2>Find your film</h2>
          <Link to="/watchlist">Go to your watch list</Link>
        </div>
      </header>
      <div id="search-bar">
        <label htmlFor="movie-search"></label>
        <input
          onChange={handleChange}
          type="search"
          name="movie-search"
          placeholder="Search for a movie"
          id="movie-search"
        />
        <button
          type="submit"
          form="movie-search-form"
          id="search-button"
          onClick={fetchMovies}
        >
          Search
        </button>
        <h1>Movie Searched: {query}</h1>
      </div>
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            watchlist={watchlist}
            onAdd={onAdd}
          />
        ))}
      </div>
    </>
  );
}
