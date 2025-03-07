import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedbackState, setFeedbackState] = useState(() => {
    const feedbackStatistic = window.localStorage.getItem("feedbackStatistic");
    return (
      JSON.parse(feedbackStatistic) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });
  useEffect(() => {
    localStorage.setItem("feedbackStatistic", JSON.stringify(feedbackState));
  }, [feedbackState]);
  const totalFeedback =
    feedbackState.good + feedbackState.neutral + feedbackState.bad;
  const positiveFeedback = Math.round(
    (feedbackState.good / totalFeedback) * 100
  );

  function updateFeedback(feedbackType) {
    feedbackType !== "resetAll"
      ? setFeedbackState({
          ...feedbackState,
          [feedbackType]: feedbackState[feedbackType] + 1,
        })
      : setFeedbackState({
          good: 0,
          neutral: 0,
          bad: 0,
        });
  }

  return (
    <div className="wrapper">
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={feedbackState.good}
          neutral={feedbackState.neutral}
          bad={feedbackState.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}

export default App;
