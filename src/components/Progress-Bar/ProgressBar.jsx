import './ProgressBar.css'

const ProgressBar = ({ currentIndex, totalQuestion }) => {
  const currentQuestion = currentIndex + 1;
  const percentage = Math.round((currentQuestion / totalQuestion) * 100);
  return (
    <div className="progress-bar">
      <div className="side-bar">
        <span className="bar" style={{ width: `${percentage}%` }}></span>
        <span className="percentage">{percentage}%</span>
      </div>
      <div className="total-questions">
        {currentQuestion} of {totalQuestion}
      </div>
    </div>
  );
};

export default ProgressBar
