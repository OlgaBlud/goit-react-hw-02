import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 5,
    bad: 0,
  });
  return (
    <>
      <Description />
      <Options feedbackState={feedbackState} />
      <Feedback feedbackState={feedbackState} />
    </>
  );
}

export default App;
