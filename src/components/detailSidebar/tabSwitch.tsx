"use client";

import { Dispatch, SetStateAction } from "react";
import { FaUtensils } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";

type Props = {
  activeTab: "prey" | "predators";
  setActiveTab: Dispatch<SetStateAction<"prey" | "predators">>;
};

export default function TabSwitch({ activeTab, setActiveTab }: Props) {
  return (
    <div className="bg-gray-100 rounded-xl p-1 flex w-full max-w-[300px] mx-auto mb-2">
      <button
        onClick={() => setActiveTab("prey")}
        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition font-medium flex-1 cursor-pointer ${
          activeTab === "prey" ? "bg-white shadow text-black" : "text-gray-700"
        }`}
      >
        <FaUtensils className="w-4 h-4" />
        Prey
      </button>
      <button
        onClick={() => setActiveTab("predators")}
        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition font-medium flex-1 cursor-pointer ${
          activeTab === "predators"
            ? "bg-white shadow text-black"
            : "text-gray-700"
        }`}
      >
        <FiAlertTriangle className="w-4 h-4" />
        Predators
      </button>
    </div>
  );
}
