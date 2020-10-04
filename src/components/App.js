import React, { Component } from 'react';
import Buttons from './Btn/statisticButtonColecting';
import StatisticList from './StatisticList/statisticList';
import GlobalStyled from '../globalSyled.component'

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStatistic = (e) => {
    const {name} = e.target;
    
    this.setState(prevState => {
      return { [name]: prevState.[name] + 1 };
    })
  };
  render() {
    return (
      <>
        <GlobalStyled/>
        <Buttons changeStatistic={this.handleStatistic} />
        <StatisticList statistics={this.state}/>
      </>
    );
  }
}

export default App;
