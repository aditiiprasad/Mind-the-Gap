import React, { useEffect, useState } from "react";
import Timer from "../components/Timer";
import WordOptions from "../components/WordOptions";
import BlankSentence from "../components/BlankSentence";
import { fetchQuestions } from "../api/questions";
import { useQuizStore } from "../store/quizStore";

const QuizPage: React.FC = () => {
  const {
    questionIndex,
    selectedAnswers,
    questions,
    setQuestionIndex,
    setSelectedAnswers,
    setQuestions,
  } = useQuizStore((state) => state);

  const [timerKey, setTimerKey] = useState(0); 

  const currentQuestion = questions[questionIndex];

  useEffect(() => {
    const loadQuestions = async () => {
      const fetchedQuestions = await fetchQuestions();
      setQuestions(fetchedQuestions); 
    };

    loadQuestions();
  }, [setQuestions]);

  const handleOptionClick = (option: string) => {
    if (selectedAnswers.length < currentQuestion.correctAnswer.length) {
      setSelectedAnswers(option);
    }
  };

  const handleAutoNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1); 
      setSelectedAnswers(""); 
      setTimerKey(prev => prev + 1); 
    } else {
      console.log("Quiz completed! 🥳");
      
    }
  };

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      {}
      <Timer
        key={timerKey} 
        duration={30}
        onTimeUp={handleAutoNext}
        resetTrigger={questionIndex}
      />

      {}
      <div className="mt-6 text-lg font-semibold">
        Q{questionIndex + 1}:
        <BlankSentence
          question={currentQuestion.question}
          selectedAnswers={selectedAnswers}
          totalBlanks={currentQuestion.correctAnswer.length}
        />
      </div>

      {/* Word options */}
      <WordOptions
        options={currentQuestion.options}
        selectedAnswers={selectedAnswers}
        onSelect={handleOptionClick}
      />
    </div>
  );
};

export default QuizPage;
