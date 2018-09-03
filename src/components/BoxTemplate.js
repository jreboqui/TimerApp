import React from 'react';

import './TimerDisplay.css';
import './BoxTemplate.css';
const BoxTemplate = (props) => {
    const { display } = props;
    console.log(display);
    if (display){
        return(
            <div>
                <h2> Timer goes here </h2>
            </div>
        )
    }
    else {
        return (
            <div>
           
            <button className="plus-button plus-button--large"></button>
            </div>
        )
    }
    
    
}

export default BoxTemplate;