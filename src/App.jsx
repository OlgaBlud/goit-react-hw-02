import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
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
    <>
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
    </>
  );
}

export default App;
