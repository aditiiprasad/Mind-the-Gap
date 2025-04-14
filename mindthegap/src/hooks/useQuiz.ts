import { useState, useEffect } from "react";
import questionsData from "../data/questions.json";

const allQuestions = questionsData.data.questions;

interface QuizState {
  questionIndex: number;
  selectedAnswers: string[];
}

const useQuiz = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    questionIndex: 0,
    selectedAnswers: [],
  });

  const currentQuestion = allQuestions[quizState.questionIndex];

  const handleOptionClick = (option: string) => {
    if (quizState.selectedAnswers.length < currentQuestion.correctAnswer.length) {
      setQuizState((prevState) => ({
        ...prevState,
        selectedAnswers: [...prevState.selectedAnswers, option],
      }));
    }
  };

  const handleAutoNext = () => {
    if (quizState.questionIndex < allQuestions.length - 1) {
      setQuizState((prevState) => ({
        ...prevState,
        questionIndex: prevState.questionIndex + 1,
        selectedAnswers: [],
      }));
    } else {
      console.log("Quiz completed! 🥳");
      
    }
  };

  return {
    quizState,
    handleOptionClick,
    handleAutoNext,
    currentQuestion,
  };
};

export default useQuiz;
