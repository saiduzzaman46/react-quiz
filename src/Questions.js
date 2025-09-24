function Questions({ questions, dispatch, answer }) {
  const hasAnswer = answer !== null;
  return (
    <div>
      <h4>{questions.question}</h4>
      <div className="options ">
        {questions.options.map((option, index) => (
          <button
            key={option}
            className={`btn btn-option ${index === answer ? "answer" : ""}
            ${
              hasAnswer
                ? index === questions.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswer}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Questions;
