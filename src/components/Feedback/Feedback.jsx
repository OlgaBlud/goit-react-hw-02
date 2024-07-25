import css from "./Feedback.module.css";
function Feedback({ feedbackState }) {
  console.log(feedbackState);

  return (
    <ul className={css.feedbackList}>
      <li className={css.feedbackItem}>
        <p className={css.feedbackText}>Good: 4</p>
      </li>
      <li className={css.feedbackItem}>
        <p className={css.feedbackText}>Neutral: 4</p>
      </li>
      <li className={css.feedbackItem}>
        <p className={css.feedbackText}>Bad: 4</p>
      </li>
      <li className={css.feedbackItem}>
        <p className={css.feedbackText}>Total: 4</p>
      </li>
      <li className={css.feedbackItem}>
        <p className={css.feedbackText}>Positive: 100%</p>
      </li>
    </ul>
  );
}
export default Feedback;
