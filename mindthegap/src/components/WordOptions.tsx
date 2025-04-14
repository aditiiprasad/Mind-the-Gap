import React from "react";

interface WordOptionsProps {
  options: string[];
  selectedAnswers: string[];
  onSelect: (option: string) => void;
}

const WordOptions: React.FC<WordOptionsProps> = ({
  options,
  selectedAnswers,
  onSelect,
}) => {
  return (
    <div className="grid grid-cols-2 gap-3 mt-6">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          disabled={selectedAnswers.includes(option)}
          className={`px-4 py-2 rounded-md border text-center transition-all duration-200 ${
            selectedAnswers.includes(option)
              ? "bg-green-200 border-green-400 cursor-not-allowed"
              : "bg-white hover:bg-pink-100 border-gray-300"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default WordOptions;
