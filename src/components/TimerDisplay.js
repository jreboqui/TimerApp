import React from 'react';

import BoxTemplate from './BoxTemplate';
import './TimerDisplay.css';

class TimerDisplay extends React.Component {
    
    render(){
        console.log(this.props);
        console.log(this.props.secondDisplay);
        return (
            <div className="container-1">
                <div className="box-1">
                    <h3>Box One</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="box-2">
                    <BoxTemplate display={this.props.secondDisplay} />
                </div>
                <div className="box-3">
                   <BoxTemplate display={this.props.thirdDisplay} />
                </div>
            </div>
        )
    }

}

export default TimerDisplay;