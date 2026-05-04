import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  function handleChange(e) {
    setQuery(e.target.value);
    console.log(query);
  }

  return (
    <>
      <h1>hello from searchbar</h1>
      <div id="search-bar">
        <label for="movie-search"></label>
        <input
          onChange={handleChange}
          type="search"
          name="movie-search"
          placeholder="Search for a movie"
          id="movie-search"
        />
        <button type="submit" form="movie-search-form" id="search-button">
          Search
        </button>
        <h1>Movie Searched: {query}</h1>
      </div>
    </>
  );
}
