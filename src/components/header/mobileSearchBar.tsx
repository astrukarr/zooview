"use client";
import { FiSearch, FiX } from "react-icons/fi";

type Props = {
  query: string;
  setQuery: (value: string) => void;
  isOpen: boolean;
  toggle: () => void;
};

export default function MobileSearchBar({
  query,
  setQuery,
  isOpen,
  toggle,
}: Props) {
  return (
    <>
      {!isOpen ? (
        <div className="flex justify-between items-center sm:hidden">
          <h1 className="text-xl font-semibold text-black">Animal Finder</h1>
          <button
            onClick={toggle}
            aria-label="Open search"
            className="p-2 cursor-pointer"
          >
            <FiSearch className="text-gray-600 w-5 h-5" />
          </button>
        </div>
      ) : (
        <div className="flex items-center sm:hidden bg-gray-100 rounded-md px-3 py-2 w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            autoFocus
            className="flex-grow bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
          />
          <button
            onClick={toggle}
            aria-label="Close search"
            className="ml-2 cursor-pointer"
          >
            <FiX className="text-gray-600 w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
}
