import { create } from "zustand";


// Define the state structure
interface QuizState {
  questionIndex: number;
  selectedAnswers: string[];
  questions: any[];
  setQuestionIndex: (index: number) => void;
  setSelectedAnswers: (answer: string) => void;
  resetQuiz: () => void;
  setQuestions: (questions: any[]) => void;
}

// Create the store
export const useQuizStore = create<QuizState>((set) => ({
  questionIndex: 0,
  selectedAnswers: [],
  questions: [],
  setQuestionIndex: (index) => set({ questionIndex: index }),
  setSelectedAnswers: (answer) => set((state) => ({
    selectedAnswers: [...state.selectedAnswers, answer],
  })),
  resetQuiz: () => set({ questionIndex: 0, selectedAnswers: [] }),
  setQuestions: (questions) => set({ questions }),
}));
