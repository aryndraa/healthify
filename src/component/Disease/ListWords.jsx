import { useState } from "react";

export const ListWords = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [activeLetter, setActiveLetter] = useState("All");

  return (
    <div className="flex flex-wrap gap-2   ">
      <button
        key="All"
        onClick={() => setActiveLetter("All")}
        className={`text-2xl font-medium flex justify-center items-center w-[84px] h-[84px] rounded-full transition ${
          activeLetter === "All" ? "bg-secondary text-white" : "bg-white hover:bg-gray-200"
        }`}
      >
        All
      </button>
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => setActiveLetter(letter)}
          className={`text-2xl font-medium flex justify-center items-center w-[84px] h-[84px] rounded-full transition ${
            activeLetter === letter ? "bg-secondary text-white" : "bg-white hover:bg-gray-200"
          }`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};
