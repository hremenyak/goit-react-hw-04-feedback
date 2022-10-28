import { Statistics } from './Statistics/Statistics';
import React, { Component } from 'react';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    console.log(e.target);
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        neutral: prevState.neutral + 1,
        bad: prevState.bad + 1,
      };
    });
  };
  render() {
    return <Statistics feedback={this.state} onClick={this.handleClick} />;
  }
}
