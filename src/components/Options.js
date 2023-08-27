import { useQuiz } from "../context/QuizContext";

function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  const isAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, ind) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: ind })}
          key={option}
          disabled={isAnswered}
          className={`btn btn-option ${answer === ind ? "answer" : ""} ${
            isAnswered
              ? question.correctOption === ind
                ? "correct"
                : "wrong"
              : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
