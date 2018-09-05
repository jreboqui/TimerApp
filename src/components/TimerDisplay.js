import React from 'react';

import BoxTemplate from './BoxTemplate';
import './TimerDisplay.css';
import './BoxTemplate.css';

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
                    { this.props.secondDisplay ? <h1>It's true</h1>
                     : <div>
                         <h1>It's false</h1>  <button className="plus-button plus-button--large" onClick={this.props.handleSecondDisplay}></button>
                        </div>
                }
                    
                </div>
                <div className="box-3">
                { this.props.thirdDisplay ? <h1>It's true</h1>
                     : <div>
                         <h1>It's false</h1>  <button className="plus-button plus-button--large" onClick={this.props.handleThirdDisplay}></button>
                        </div>
                }
                </div>
            </div>
        )
    }

}

export default TimerDisplay;