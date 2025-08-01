"use client";
import Header from "../components/header/header";
import AnimalList from "../components/animalList/animalList";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center p-2">
      <div
        className="w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
        style={{ height: "calc(100vh - 8px)" }}
      >
        <Header query={searchQuery} setQuery={setSearchQuery} />
        <div className="overflow-y-auto flex-grow">
          <AnimalList query={searchQuery} />
        </div>
      </div>
    </main>
  );
}
