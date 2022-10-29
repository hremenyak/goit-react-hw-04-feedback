import { Statistics } from './Statistics/Statistics';
import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Wrapper } from './utils/Wrapper.styled';

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
    return Object.values(this.state).reduce((value, acc) => {
      return value + acc;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positiveFB = (this.state.good * 100) / total;
    return Math.round(positiveFB);
  };
  render() {
    return (
      <Wrapper>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.state.good > 0 ||
          this.state.bad > 0 ||
          this.state.neutral > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedback={this.countTotalFeedback}
              positiveFb={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback yet." />
          )}
        </Section>
      </Wrapper>
    );
  }
}
