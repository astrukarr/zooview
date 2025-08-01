"use client";
import { useState } from "react";
import DesktopSearchBar from "./desktopSearchBar";
import MobileSearchBar from "./mobileSearchBar";

type Props = {
  query: string;
  setQuery: (value: string) => void;
};

export default function Header({ query, setQuery }: Props) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const toggleMobileSearch = () => setMobileSearchOpen((prev) => !prev);

  return (
    <header className="px-6 py-4 bg-white border-b border-gray-200 sm:flex sm:justify-between sm:items-center relative">
      <div className="hidden sm:flex justify-between items-center w-full">
        <h1 className="text-xl font-semibold text-black">Animal Finder</h1>
        <DesktopSearchBar query={query} setQuery={setQuery} />
      </div>

      <MobileSearchBar
        query={query}
        setQuery={setQuery}
        isOpen={mobileSearchOpen}
        toggle={toggleMobileSearch}
      />
    </header>
  );
}
