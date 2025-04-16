import { useEffect } from 'react';

type TimerProps = {
  timeLeft: number;
  setTimeLeft: (time: number) => void;
  onTimeout: () => void;
};

export default function Timer({ timeLeft, setTimeLeft, onTimeout }: TimerProps) {
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, setTimeLeft, onTimeout]);

  const strokeDashoffset = (timeLeft / 30) * 283; 

  return (
    <div className="relative flex justify-center items-center mb-4">
      <svg className="w-24 h-24 rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <circle
          className="text-gray-700"
          strokeWidth="10"
          fill="transparent"
          r="45"
          cx="60"
          cy="60"
        />
        <circle
          className="text-gradient-animation"
          strokeWidth="10"
          fill="transparent"
          r="45"
          cx="60"
          cy="60"
          strokeDasharray="283"
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="absolute text-white text-3xl font-semibold">
        {timeLeft}s
      </div>
    </div>
  );
}
