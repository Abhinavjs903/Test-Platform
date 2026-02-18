import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  const score = location.state?.score || 0;

  return (
    <div className="container">
      <h2>Test Completed 🎉</h2>
      <p>Your Score: {score} / 3</p>
    </div>
  );
}

export default Result;
