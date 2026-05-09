import SearchBar from "../components/SearchBar";

export default function SearchPage({ watchlist, onAdd }) {
  return <SearchBar watchlist={watchlist} onAdd={onAdd} />;
}
