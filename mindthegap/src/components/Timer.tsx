import { useEffect, useState } from "react";

interface TimerProps {
  duration: number; 
  onTimeUp: () => void; 
  resetTrigger: number; 
}

const Timer: React.FC<TimerProps> = ({ duration, onTimeUp, resetTrigger }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    
    setTimeLeft(duration);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval); 
          onTimeUp(); 
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); 
  }, [resetTrigger, duration, onTimeUp]); 

  const percentage = (timeLeft / duration) * 100; 

  return (
    <div className="flex justify-center items-center my-4">
      <div
        className="relative w-24 h-24 rounded-full flex items-center justify-center text-pink-600 font-bold text-lg"
        style={{
          background: `conic-gradient(#ec4899 ${percentage * 3.6}deg, #f3f4f6 ${percentage * 3.6}deg)`,
        }}
      >
        <div className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-inner">
          {timeLeft}s
        </div>
      </div>
    </div>
  );
};

export default Timer;
