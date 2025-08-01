"use client";

import { useQuery } from "@tanstack/react-query";
import AnimalCard from "./animalCard";
import { Animal, AnimalsResponse } from "../../types/animal";

async function fetchAnimals(): Promise<Animal[]> {
  const res = await fetch("/api/animals");

  if (!res.ok) {
    throw new Error("Failed to fetch animals");
  }

  const data: AnimalsResponse = await res.json();
  return data.data;
}

export default function AnimalList({ query }: { query: string }) {
  const {
    data: animals = [],
    isLoading,
    isError,
  } = useQuery<Animal[]>({
    queryKey: ["animals"],
    queryFn: fetchAnimals,
  });

  const filtered = animals.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="p-8 text-center text-gray-500 text-lg">
        Loading animals...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-8 text-center text-red-500 text-lg">
        Failed to load animals
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500 text-lg">
        No results found for "<span className="italic">{query}</span>"
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
      {filtered.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
}
