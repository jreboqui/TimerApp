import React from 'react';
import { Button } from 'react-bootstrap';

import { Row } from 'react-bootstrap';
import * as timerStates from '../timerStates';


class TimerButton extends React.Component {
  
    constructor(props) {
      super(props);
  
      this.getButton = this.getButton.bind(this);
    }
    
    getButton(){
      if (this.props.timerState === timerStates.NOT_SET)
        return (
          <Row>
          {/* <Button bsStyle="success" id={this.props.currentID} onClick={this.props.startTimer}>Start Timer</Button> */}
          <button id={this.props.currentID} onClick={this.props.startTimer}>Start Timer</button>
          </Row>
        )
  
        if (this.props.timerState === timerStates.RUNNING)
          return (
            <button id={this.props.currentID} onClick={this.props.stopTimer}>Stahp it</button>
            
          )
  
        if (this.props.timerState === timerStates.COMPLETE)
        return (
          <Button bsStyle="info" onClick={this.props.stopTimer}>Reset</Button>
        )
  
  
    }
    render() {
      return (
        <div className="row text-primary text-left" style={{ paddingLeft:'13%'}}>
          {this.getButton()}
        </div>
  
      );
    }
  }
  export default TimerButton;
  
  