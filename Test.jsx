import { useState } from "react";
import { questions } from "../data";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Test() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });
    navigate("/result", { state: { score } });
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <h3>Question {index + 1}</h3>
        <div className="card">
          <p>{questions[index].question}</p>
          {questions[index].options.map((opt, i) => (
            <div key={i}>
              <input
                type="radio"
                name="option"
                onChange={() => handleSelect(opt)}
              />
              {opt}
            </div>
          ))}
        </div>

        <button
          className="btn"
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
        >
          Previous
        </button>

        {index < questions.length - 1 ? (
          <button className="btn" onClick={() => setIndex(index + 1)}>
            Next
          </button>
        ) : (
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default Test;
