import { Animal, AnimalsResponse } from "@/src/types/animal";

export async function getAllAnimals(): Promise<Animal[]> {
  const res = await fetch("/api/animals");

  if (!res.ok) {
    throw new Error("Failed to fetch animals");
  }

  const data: AnimalsResponse = await res.json();
  return data.data;
}
