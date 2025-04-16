import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Timer from '../components/Timer';
import WordOption from '../components/WordOption';
import ProgressIndicator from '../components/ProgressIndicator';
import { getQuestions } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Game() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [droppedWords, setDroppedWords] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getQuestions().then(setQuestions);
  }, []);

  const current = questions[currentIndex];

  const handleDrop = (e: React.DragEvent<HTMLSpanElement>, index: number) => {
    const word = e.dataTransfer.getData('text/plain');
    if (!droppedWords.includes(word)) {
      const newDropped = [...droppedWords];
      newDropped[index] = word;
      setDroppedWords(newDropped);
    }
  };

  const handleNext = () => {
    const isCorrect =
      JSON.stringify(droppedWords) === JSON.stringify(current.correctAnswer);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        question: current.question,
        correct: current.correctAnswer,
        userAnswer: droppedWords,
      },
    ]);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setDroppedWords([]);
      setTimeLeft(30);
    } else {
      navigate('/result', {
        state: { score, userAnswers: [...userAnswers, {
          question: current.question,
          correct: current.correctAnswer,
          userAnswer: droppedWords,
        }] },
      });
    }
  };

  const handleReset = () => {
    setDroppedWords([]);
  };

  const handleExitGame = () => {
    
    setUserAnswers((prev) => [
      ...prev,
      {
        question: current.question,
        correct: current.correctAnswer,
        userAnswer: droppedWords,
      },
    ]);

    
    navigate('/result', { state: { score, userAnswers } });
  };

  const allFilled = droppedWords.filter(Boolean).length === 4;

  if (!current) return <div className="text-white">Loading...</div>;

  const renderQuestionWithBoxes = () => {
    let boxCounter = 0;
    return current.question.split(/(_{2,})/g).map((part: string, idx: number) => {
      if (/_{2,}/.test(part)) {
        const index = boxCounter++;
        return (
          <span
            key={idx}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={(e) => e.preventDefault()}
            className="inline-block h-12 w-28 mx-1 border-2 border-dashed rounded-xl bg-white/70 text-black text-base font-medium text-center align-middle leading-[3rem] transition-all"
          >
            {droppedWords[index] || '...'}
          </span>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white flex flex-col items-center p-6 transition-all">
      <Header />
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeout={handleNext} />
      <ProgressIndicator current={currentIndex} total={questions.length} />

      
      <p className="text-xl mb-8 text-center max-w-4xl flex flex-wrap justify-center leading-8 transition-all">
        {renderQuestionWithBoxes()}
      </p>

     
      <div className="flex gap-4 flex-wrap justify-center mb-6">
        {current.options.map((word: string) => (
          <WordOption
            key={word}
            word={word}
            onDragStart={(e, w) => e.dataTransfer.setData('text/plain', w)}
            disabled={droppedWords.includes(word)}
          />
        ))}
      </div>

      <div className="flex gap-6">
        <button
          onClick={handleReset}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-600 text-black font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
        >
          Reset
        </button>

        <button
          onClick={handleExitGame}
          className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
        >
          Exit Game
        </button>

        {allFilled && (
          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-green-500 to-lime-400 hover:from-green-400 hover:to-lime-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}
