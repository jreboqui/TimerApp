import React from 'react';

import TimerHeader from './TimerHeader';
import TimerDisplay from './TimerDisplay';
class Timer extends React.Component
{
    render ()
    {
        return(
            <div> 
                <TimerHeader />
                <TimerDisplay />
            </div>
        )
    }
}

export default Timer;