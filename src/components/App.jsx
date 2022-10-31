import Statistics from './Statistics';
import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import { Wrapper } from '../utils/Wrapper.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const rating = e.target.name;
    this.setState(prevState => {
      return {
        ...prevState,
        [rating]: prevState[rating] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positiveFB = (this.state.good * 100) / total;
    return Math.round(positiveFB);
  };
  render() {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    return (
      <Wrapper>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={this.countTotalFeedback()}
              positiveFb={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet." />
          )}
        </Section>
      </Wrapper>
    );
  }
}
