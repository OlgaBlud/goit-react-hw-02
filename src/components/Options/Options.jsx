import css from "./Options.module.css";
function Options({ updateFeedback, totalFeedback }) {
  return (
    <div className={css.btnsWrap}>
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
  );
}
export default Options;
