import React, { Component } from 'react';
import List from './statistic.component';
import PropTypes from 'prop-types';

class StatisticList extends Component {

    render() {
        const {good, neutral, bad} = this.props.statistics;
        const total = good + neutral + bad;
        const percentage = Math.round((good / total) * 100);
        return (
          <List.Container>
            <h2>Statistics</h2>
            {total > 0 && <List>
              <li>Good {good}</li>
              <li>Neutral {neutral}</li>
              <li>Bad {bad}</li>
              <li>Total {total}</li>
              <li>Positive feedback: {percentage}%</li>
            </List>}
            
          </List.Container>
        );
    }
}

StatisticList.propTypes = {
  statistics: PropTypes.object
}

export default StatisticList;