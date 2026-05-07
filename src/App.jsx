import { useState } from "react";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [watchlist, setWatchlist] = useState([]);

  function onAdd(movie) {
    setWatchlist((prev) => [...prev, movie]);
  }

  return <SearchBar watchlist={watchlist} onAdd={onAdd} />;
}
