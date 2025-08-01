"use client";
import { FiSearch } from "react-icons/fi";

type Props = {
  query: string;
  setQuery: (value: string) => void;
};

export default function DesktopSearchBar({ query, setQuery }: Props) {
  return (
    <div className="hidden sm:flex items-center bg-gray-100 rounded-md px-3 py-2 w-64">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="bg-transparent outline-none flex-grow text-sm text-gray-700 placeholder-gray-400"
      />
      <FiSearch className="text-gray-500 w-5 h-5" />
    </div>
  );
}
