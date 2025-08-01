"use client";
import Header from "../components/header/header";
import AnimalList from "../components/animalList/animalList";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center p-2">
      <div className="w-full bg-white rounded-xl shadow-md">
        <Header query={searchQuery} setQuery={setSearchQuery} />
        <AnimalList query={searchQuery} />
      </div>
    </main>
  );
}
