import React from 'react';

import TimerHeader from './TimerHeader';
import TimerDisplay from './TimerDisplay';
class Timer extends React.Component
{
    constructor() {
        super();

        this.state = {
            secondBox: false,
            // currentTime: moment.duration(25, 'minutes'),
            // baseTime: moment.duration(25, 'minutes'),
            // timerState: timerStates.NOT_SET,
            // timer: null
        };

        // this.setBaseTime = this.setBaseTime.bind(this);
        // this.startTimer = this.startTimer.bind(this);
        // this.reduceTimer = this.reduceTimer.bind(this);
        // this.stopTimer = this.stopTimer.bind(this);
        // this.resetTimer = this.resetTimer.bind(this);

    }
    render ()
    {
        return(
            <div> 
                <TimerHeader />
                <TimerDisplay secondDisplay={this.state.secondBox}/>
            </div>
        )
    }
}

export default Timer;