export const Statistics = ({ feedback, onClick }) => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <div>
        <button onClick={onClick} type="button">
          Good
        </button>
        <button onClick={onClick} type="button">
          Neutral
        </button>
        <button onClick={onClick} type="button">
          Bad
        </button>
      </div>
      <h2>Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
    </div>
  );
};
