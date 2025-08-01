"use client";
import Header from "../components/header/header";
import AnimalList from "../components/animalList/animalList";
import { useState } from "react";
import AnimalDetailSidebar from "../components/animalDetailSidebar/animalDetailSidebar";
import { Animal } from "../types/animal";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center p-2">
      <div className="w-full flex rounded-xl shadow-md overflow-hidden bg-white">
        <div
          className="flex flex-col flex-grow"
          style={{ height: "calc(100vh - 8px)" }}
        >
          <Header query={searchQuery} setQuery={setSearchQuery} />
          <div className="overflow-y-auto flex-grow">
            <AnimalList
              query={searchQuery}
              onInfoClick={(animal) => setSelectedAnimal(animal)}
            />
          </div>
        </div>

        {selectedAnimal && (
          <AnimalDetailSidebar
            animal={selectedAnimal}
            onClose={() => setSelectedAnimal(null)}
          />
        )}
      </div>
    </main>
  );
}
