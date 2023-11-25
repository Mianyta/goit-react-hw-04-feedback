import { useState } from 'react';
import { Section } from './Sections/Section';
import { FeedbackOptions } from './Sections/FeedbackOptions/FeedbackOptions';
import { Notification } from './Sections/Notification/Notification';
import { Statistics } from './Sections/Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const getButtonName = option => {
    if (option === 'good') {
      setGood(prevGood => prevGood + 1);
      console.log(good);
    } else if (option === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
      console.log(neutral);
    } else if (option === 'bad') {
      setBad(prevBad => prevBad + 1);
      console.log(bad);
    }
  };

  const counntTotal = () => {
    return good + neutral + bad;
  };

  const calcPositiveFeedback = () => {
    const total = counntTotal();
    return Math.round((good / total) * 100);
  };

  const options = ['good', 'neutral', 'bad'];
  let isStatisticsGiven = counntTotal();
  console.log(isStatisticsGiven);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} getButtonName={getButtonName} />
      </Section>
      <Section title="Statistics">
        {isStatisticsGiven === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            counntTotal={counntTotal}
            calcPositiveFeedback={calcPositiveFeedback}
          />
        )}
      </Section>
    </>
  );
};
