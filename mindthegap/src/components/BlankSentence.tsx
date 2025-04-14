import React from "react";

interface BlankSentenceProps {
  question: string;
  selectedAnswers: string[];
  totalBlanks: number;
}

const BlankSentence: React.FC<BlankSentenceProps> = ({
  question,
  selectedAnswers,
  totalBlanks,
}) => {
  const parts = question.split("_____________");

  return (
    <div className="text-lg font-semibold">
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < totalBlanks && (
            <span className="inline-block w-20 text-center border-b-2 border-pink-400 mx-1">
              {selectedAnswers[index] ?? ""}
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default BlankSentence;
