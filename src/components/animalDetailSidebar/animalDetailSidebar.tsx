import { Animal } from "@/src/types/animal";
import { FiX } from "react-icons/fi";

type Props = {
  animal: Animal;
  onClose: () => void;
};

export default function AnimalDetailSidebar({ animal, onClose }: Props) {
  return (
    <aside className="w-96 h-full bg-white border-l border-gray-200">
      <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">{animal.name}</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-lg text-gray-600 hover:text-black transition cursor-pointer"
          aria-label="Close sidebar"
        >
          <FiX className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center py-8">
        <div
          className="w-36 h-36 rounded-2xl"
          style={{ backgroundColor: animal.color }}
        />
        <h3 className="mt-6 text-xl font-semibold text-black">{animal.name}</h3>
        <p className="text-gray-600 text-base">{animal.species}</p>
      </div>
    </aside>
  );
}
