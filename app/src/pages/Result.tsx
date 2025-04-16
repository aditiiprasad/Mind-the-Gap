import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface AnswerItem {
  question: string;
  userAnswer: string[];
  correct: string[];
}

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, userAnswers }: { score: number; userAnswers: AnswerItem[] } =
    location.state || { score: 0, userAnswers: [] };

  const [celebration, setCelebration] = useState(false);
  const [backgroundGif, setBackgroundGif] = useState("");

  useEffect(() => {
    if (score >= 7) {
      setCelebration(true);
      setBackgroundGif("/celebrate.gif");
    } else if (score < 5) {
      setBackgroundGif("/celebrate.gif"); 
    } else {
      setBackgroundGif(""); 
    }
  }, [score]);

  const handlePlayAgain = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center p-6 transition-all relative">
      {backgroundGif && (
        <img
          src={backgroundGif}
          alt="Background Gif"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />
      )}
      
      <h1 className="text-4xl font-bold mb-4 text-center z-10">
        {score >= 7 ? '🎉 Celebration Time! 🎉' : score >= 5 ? 'You Did Good!' : 'Better Luck Next Time!'}
      </h1>

      {celebration && (
        <img src="/confetti.gif" alt="Confetti" className="w-40 h-40 mb-4 animate-bounce z-10" />
      )}

      <p className="text-2xl font-semibold mb-8 z-10">
        You scored <span className="text-green-400">{score}</span> out of {userAnswers.length}!
      </p>

      <div className="grid gap-6 w-full max-w-4xl z-10">
        {userAnswers.map((item, index) => {
          const isCorrect = JSON.stringify(item.userAnswer) === JSON.stringify(item.correct);

          return (
            <div
              key={`${item.question}-${index}`}
              className="p-1 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg"
            >
              <div className="bg-black p-6 rounded-xl transition-all">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">Question {index + 1}</h2>
                  <span
                    className={`text-sm px-3 py-1 rounded-full font-bold ${
                      isCorrect
                        ? 'bg-gradient-to-r from-green-400 to-lime-500 text-black'
                        : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                    }`}
                  >
                    {isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                </div>

                <p className="mb-2 text-gray-300">
                  <span className="font-medium text-white">Question:</span> {item.question}
                </p>

                <div className="flex flex-col md:flex-row md:gap-8 gap-4">
                  <div>
                    <p className="font-medium text-white mb-1">Your Answer:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.userAnswer.map((word, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            item.correct[i] !== word
                              ? 'bg-white text-black ring-2 ring-red-500'
                              : 'bg-white text-black'
                          }`}
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-white mb-1">Correct Answer:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.correct.map((word, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-lime-400 text-black text-sm font-semibold"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={handlePlayAgain}
        className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold py-2 px-6 rounded-lg shadow-md transition-all z-10"
      >
        Play Again
      </button>
    </div>
  );
}
