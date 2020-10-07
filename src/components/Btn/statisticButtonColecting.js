import React, { Component } from 'react'
import Button from './btn.component'

class Buttons extends Component {
    render() {
        const {changeStatistic} = this.props;
        return (
          <Button.Container>
            <h2>Please leave feedback</h2>
            <Button name={"good"} onClick={changeStatistic}>
              Good
            </Button>
            <Button name={"neutral"} onClick={changeStatistic}>
              Neutral
            </Button>
            <Button name={"bad"} onClick={changeStatistic}>
              Bad
            </Button>
          </Button.Container>
        );
    }
};

Buttons.propTypes = {
  changeStatistic: propTypes.func
};

export default Buttons;