import { useState, useEffect } from 'react';

import Description from './Description.jsx';
import Options from './Options.jsx'
import Feedback from './Feedback.jsx';
import Notification from './Notification.jsx';


import "./App.css";


const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedback = JSON.parse(window.localStorage.getItem('feedbacks'));
    return savedFeedback ? savedFeedback : { good: 0, neutral: 0, bad: 0 };
  });
  
  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    })
  };

    useEffect(() => {
    window.localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positivePercentage = Math.round(((feedbacks.good) / totalFeedback) * 100);

    const resetFeedback = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };



  return (
    <>
      <Description/>
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback > 0} />
      {totalFeedback > 0 ? 
        (<Feedback good={feedbacks.good}
        neutral={feedbacks.neutral}
        bad={feedbacks.bad}
        total={totalFeedback}
        positivePercentage={positivePercentage}/>)
      : (
        <Notification/>
      )}

    </>
  )
}

export default App;