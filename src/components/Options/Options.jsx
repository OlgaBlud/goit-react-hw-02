import css from "./Options.module.css";
function Options({ updateFeedback, totalFeedback }) {
  //   const updateFeedback = (feedbackType) => {
  //     setFeedbackState(feedbackState.feedbackType + 1);
  //   };

  return (
    <div>
      <button
        className={css.optionBtn}
        type="button"
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.optionBtn}
        type="button"
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.optionBtn}
        type="button"
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={css.optionBtn}
          type="button"
          onClick={() => updateFeedback("resetAll")}
        >
          Reset
        </button>
      )}
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
