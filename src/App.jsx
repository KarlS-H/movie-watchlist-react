import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("watchlist"));
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  function onAdd(movie) {
    setWatchlist((prev) => {
      const alreadySaved = prev.some((m) => m.imdbID === movie.imdbID);
      if (alreadySaved) {
        return prev.filter((m) => {
          return m.imdbID !== movie.imdbID;
        });
      }
      return [...prev, movie];
    });
  }
  return <SearchBar watchlist={watchlist} onAdd={onAdd} />;
}
