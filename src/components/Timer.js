import React from 'react';

import TimerHeader from './TimerHeader';
import TimerDisplay from './TimerDisplay';
import * as timerStates from '../timerStates';
import moment from 'moment';

class Timer extends React.Component
{
    constructor() {
        super();

        this.state = {
            objectA: {
                
                currentTime: moment.duration(25, 'minutes'),
                baseTime: moment.duration(25, 'minutes'),
                timerState: timerStates.NOT_SET,
                timer: null,
                currentNumber: 123
            },
            firstBox: true,
            secondBox: false,
            thirdBox: false,
            
        };
        
        this.handleSecondDisplay = this.handleSecondDisplay.bind(this);
        this.handleThirdDisplay = this.handleThirdDisplay.bind(this);
        // this.setBaseTime = this.setBaseTime.bind(this);
        // this.startTimer = this.startTimer.bind(this);
        // this.reduceTimer = this.reduceTimer.bind(this);
        // this.stopTimer = this.stopTimer.bind(this);
        // this.resetTimer = this.resetTimer.bind(this);

    }

    handleSecondDisplay(){
        this.setState({
            secondBox: true,
        });
    }

    handleThirdDisplay(){
        this.setState({
            thirdBox: true,
        });
    }
    render ()
    {
        return(
            <div> 
                <TimerHeader />
                <TimerDisplay props1={this.state.objectA} firstDisplay={this.state.firstBox} secondDisplay={this.state.secondBox} thirdDisplay={this.state.thirdBox}
                    handleSecondDisplay={this.handleSecondDisplay} handleThirdDisplay={this.handleThirdDisplay}/>
            </div>
        )
    }
}

export default Timer;