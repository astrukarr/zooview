import { FiInfo } from "react-icons/fi";
import AnimalInfoSection from "../animalInfoSection/animalInfoSection";
import { Animal } from "@/src/types/animal";

type Props = {
  animal: Animal;
  onInfoClick?: () => void;
};

export default function AnimalCard({ animal, onInfoClick }: Props) {
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
          <button onClick={onInfoClick}>
            <FiInfo className="text-gray-800 h-4 w-4 cursor-pointer" />
          </button>
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
