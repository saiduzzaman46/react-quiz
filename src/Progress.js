function Progress({ index, numQuestions, points, maxPosiblePoints, answer }) {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestions} />
      <p>
        Question <strong>{index + 1}</strong>/ <strong>{numQuestions}</strong>
      </p>
      <p>
        <strong>{points}</strong>/ <strong>{maxPosiblePoints}</strong>
      </p>
    </header>
  );
}

export default Progress;
