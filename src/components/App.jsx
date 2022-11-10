import Statistics from './Statistics';
import React, { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import { Wrapper } from '../utils/Wrapper.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleClick = e => {
    const rating = e.target.name;
    switch (rating) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      default:
        throw new Error('There is not such a feedback options');
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positiveFB = (good * 100) / total;
    return Math.round(positiveFB);
  };

  const total = countTotalFeedback();

  const makeOptions = () => {
    return { good, bad, neutral };
  };
  const options = makeOptions();

  return (
    <Wrapper>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={total}
            positiveFb={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback yet." />
        )}
      </Section>
    </Wrapper>
  );
};
