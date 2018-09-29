import React from 'react';

import TimerHeader from './TimerHeader';
import TimerDisplay from './TimerDisplay';
//import * as timerStates from '../timerStates';
//import moment from 'moment';

class Timer extends React.Component
{
    constructor() {
        super();

        this.state = {
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

    handleSecondDisplay = (event) => {
        const {id} = event.target;
        console.log(id);
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
                <TimerDisplay firstDisplay={this.state.firstBox} secondDisplay={this.state.secondBox} thirdDisplay={this.state.thirdBox}
                    handleSecondDisplay={this.handleSecondDisplay} handleThirdDisplay={this.handleThirdDisplay}/>
            </div>
        )
    }
}

export default Timer;