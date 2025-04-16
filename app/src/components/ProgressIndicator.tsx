

type ProgressProps = {
    current: number;
    total: number;
  };
  
  const ProgressIndicator: React.FC<ProgressProps> = ({ current, total }) => {
    const percentage = ((current + 1) / total) * 100;
  
    return (
      <div className="w-full mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-white font-medium">
            Question {current + 1} of {total}
          </span>
          <span className="text-sm text-white font-medium">
            {Math.round(percentage)}%
          </span>
        </div>
        <div className="w-full h-3 bg-gray-800 rounded-full">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default ProgressIndicator;
  