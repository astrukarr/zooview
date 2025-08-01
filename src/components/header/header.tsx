import { FiSearch } from "react-icons/fi";

type Props = {
  query: string;
  setQuery: (value: string) => void;
};

export default function Header({ query, setQuery }: Props) {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white rounded-t-md shadow">
      <h1 className="text-xl font-semibold text-black">Animal Finder</h1>

      <div className="flex items-center sm:bg-gray-100 rounded-md px-3 py-2 w-64 max-sm:w-auto max-sm:p-0 max-sm:justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="bg-transparent outline-none flex-grow text-sm text-gray-700 placeholder-gray-400 max-sm:hidden"
        />
        <FiSearch className="text-gray-500 w-5 h-5" />
      </div>
    </header>
  );
}
