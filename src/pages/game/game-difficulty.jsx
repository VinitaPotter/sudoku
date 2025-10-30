import { useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
export default function Difficulty({
  difficultyLevel,
  onUpdateDifficulty,
  showPopup,
  updateShowPopup,
}) {
  const [selectedDiff, updateSelectedDiff] = useState(1);

  useEffect(() => {
    updateSelectedDiff(difficultyLevel);
  }, []);

  const btn_u =
    "shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transition";
  const btn_p =
    "shadow-[inset_4px_4px_6px_rgba(0,0,0,0.25),inset_-4px_-4px_6px_rgba(255,255,255,0.5)]";

  const levels = ["easy", "medium", "hard"];
  return (
    <div className="bg-yellow-300 border rounded-3xl shadow-md h-64 w-1/2 px-4 py-2 flex flex-col justify-around absolute inset-1/4 -inset-2/4 ">
      <div className="flex justify-between">
        <p className="font-black text-3xl">
          Select difficulty level: {levels[selectedDiff]}
        </p>
        <XCircleIcon
          className="size-6 cursor-pointer"
          onClick={() => updateShowPopup(false)}
        ></XCircleIcon>
      </div>
      <div className="flex justify-around">
        {levels.map((level, index) => {
          return (
            <button
              onClick={() => updateSelectedDiff(index)}
              className={`ring-2 ${selectedDiff === index ? btn_p : btn_u}`}
              key={index}
            >
              {level}
            </button>
          );
        })}
      </div>
      <button
        className={`ring-2 ${btn_u}`}
        onClick={() => onUpdateDifficulty(selectedDiff)}
      >
        Start
      </button>
    </div>
  );
}
