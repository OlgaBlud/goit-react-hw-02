import css from "./Options.module.css";
function Options({ feedbackState }) {
  console.log(feedbackState);
  //   const updateFeedback = (feedbackType) => {
  //     setFeedbackState(feedbackState.feedbackType + 1);
  //   };

  return (
    <div>
      <button className={css.optionBtn}>Good</button>
      <button className={css.optionBtn}>Neutral</button>
      <button className={css.optionBtn}>Bad</button>
    </div>
    // <ul className={css.optionList}>
    //   <li className={css.optionItem}>
    //     <button className={css.optionBtn}>Good</button>
    //   </li>
    //   <li className={css.optionItem}>
    //     <button className={css.optionBtn}>Neutral</button>
    //   </li>

    //   <li className={css.optionItem}>
    //     <button className={css.optionBtn}>Bad</button>
    //   </li>
    // </ul>
  );
}
export default Options;
