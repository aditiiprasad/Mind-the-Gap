import questionsData from "../data/questions.json";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string[];
}

export const fetchQuestions = async (): Promise<Question[]> => {
  // Simulating an API call, can be replaced with an actual API fetch call
  try {
    // Uncomment the below line to fetch from an actual server (example):
    // const response = await fetch('https://api.example.com/questions');
    // const data = await response.json();

    // For now, we'll use local data (this is your fallback)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(questionsData.data.questions);
      }, 1000); // Simulate a delay
    });
  } catch (error) {
    console.error("Failed to fetch questions:", error);
    return questionsData.data.questions; // Fallback to local data
  }
};
