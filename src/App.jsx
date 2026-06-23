import { useCallback, useEffect, useState } from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";

import SearchBar from "./components/SearchBar";
import SearchPage from "./pages/SearchPage";
import WatchlistPage from "./pages/WatchlistPage";
import AuthPage from "./pages/LoginPage";
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

  const onAdd = useCallback(
    (movie) => {
      setWatchlist((prev) => {
        const alreadySaved = prev.some((m) => m.imdbID === movie.imdbID);
        if (alreadySaved) {
          return prev.filter((m) => {
            return m.imdbID !== movie.imdbID;
          });
        }
        return [...prev, movie];
      });
    },
    [setWatchlist],
  );
  // function onAdd(movie) {}

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<SearchPage watchlist={watchlist} onAdd={onAdd} />}
        />
        <Route
          path="/watchlist"
          element={<WatchlistPage watchlist={watchlist} onAdd={onAdd} />}
        />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
