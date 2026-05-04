export default function SearchBar() {
  return (
    <>
      <h1>hello from searchbar</h1>
      <div id="search-bar">
        <label for="movie-search"></label>
        <input
          type="search"
          name="movie-search"
          placeholder="Search for a movie"
          id="movie-search"
        />
        <button type="submit" form="movie-search-form" id="search-button">
          Search
        </button>
      </div>
    </>
  );
}
