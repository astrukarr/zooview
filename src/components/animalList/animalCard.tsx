import { FiInfo } from "react-icons/fi";
import AnimalInfoSection from "../animalInfoSection/animalInfoSection";

type Animal = {
  id: number;
  name: string;
  species: string;
  size: string;
  prey: number[];
  predators: number[];
  color: string;
};

export default function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-3">
          <span
            className="h-10 w-10 rounded-full inline-block"
            style={{ backgroundColor: animal.color }}
          />
          <div>
            <h2 className="font-bold text-gray-900">{animal.name}</h2>
            <p className="text-gray-600 text-sm">{animal.species}</p>
          </div>
        </div>
        <div className="bg-gray-100 p-1 rounded-lg">
          <FiInfo className="text-gray-800 h-4 w-4 cursor-pointer" />
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      <AnimalInfoSection
        size={animal.size}
        preyCount={animal.prey.length}
        predatorCount={animal.predators.length}
      />
    </div>
  );
}
