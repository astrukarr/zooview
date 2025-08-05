"use client";

import { Animal } from "@/src/types/animal";
import { useState } from "react";
import TabSwitch from "./tabSwitch";

type Props = {
  animal: Animal;
  allAnimals: Animal[] | undefined;
  isLoading: boolean;
};

export default function RelatedAnimals({
  animal,
  allAnimals,
  isLoading,
}: Props) {
  const [activeTab, setActiveTab] = useState<"prey" | "predators">("prey");

  const relatedAnimals = (animal[activeTab] || [])
    .map((id) => allAnimals?.find((a) => a.id === id))
    .filter(Boolean) as Animal[];

  return (
    <>
      <TabSwitch activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-grow overflow-y-auto px-4 mt-4 space-y-2">
        {isLoading ? (
          <p className="text-center text-gray-500 mt-8">Loading...</p>
        ) : relatedAnimals.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">
            No {activeTab} found.
          </p>
        ) : (
          relatedAnimals.map((a) => (
            <div
              key={a.id}
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 cursor-pointer"
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: a.color }}
              />
              <div>
                <p className="font-semibold">{a.name}</p>
                <p className="text-sm text-gray-500 capitalize">{a.species}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
