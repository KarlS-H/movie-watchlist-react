import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  function handleChange(e) {
    setQuery(e.target.value);
    console.log(query);
  }

  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    let movieSearch = query.trim();
    const apiKey = import.meta.env.VITE_PUBLIC_OMDB_KEY;

    const searchResponse = await fetch(
      `https://www.omdbapi.com/?s=${movieSearch}&type=movie&apikey=${apiKey}`,
    );

    const searchData = await searchResponse.json();
    setMovies(searchData);
    // console.log(apiKey);
    // console.log(query);
    console.log(searchData.Search ?? []);
  }

  return (
    <>
      <h1>hello from searchbar</h1>
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
    </>
  );
}
