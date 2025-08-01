import AnimalCard from "./animalCard";

const animals = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: `Stella ${i + 1}`,
  species: "gnat",
  size: "medium",
  prey: [1, 2, 3],
  predators: [4, 5],
  color: "rgb(252, 175, 115)",
}));

export default function AnimalList({ query }: { query: string }) {
  const filtered = animals.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase())
  );

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
