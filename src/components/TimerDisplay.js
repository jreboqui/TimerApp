import React from 'react';

import BoxTemplate from './BoxTemplate';
import { Row, Col } from 'react-bootstrap';
import * as timerStates from '../timerStates';
import moment from 'moment';
import './TimerDisplay.css';
import './BoxTemplate.css';

const leftPad = (val) => {
    if (val < 10) return `0${val}`;

    return `${val}`;
}


class TimerDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            currentID: '1',
            objectA: {abc: '123',
                    currentTime: moment.duration(25, 'minutes'),
                    baseTime: moment.duration(25, 'minutes'),
                    timerState: timerStates.NOT_SET,
                    timer: null,
                    },
            objectB: {
                currentID: '2',
                abc: '123',
                currentTime: moment.duration(10, 'minutes'),
                baseTime: moment.duration(25, 'minutes'),
                timerState: timerStates.NOT_SET,
                timer: null,
                
            },
            objectC: {
                currentID: '3',
                abc: '123',
                currentTime: moment.duration(5, 'minutes'),
                baseTime: moment.duration(25, 'minutes'),
                timerState: timerStates.NOT_SET,
                timer: null,
                
            },
        };
    }
    render(){
        console.log(this.props);    

        return (
            <div className="container-1">
                <div className="box-1">
                   
                    <Row className="show-grid">
                        <Col className="show-grid" xs={12} md={12}>
                            <div className="text-primary">
                                
                                <h2 className="text-left" 
                                style={{ fontSize:'8rem'}}>
                                {`${leftPad(this.state.objectA.currentTime.get('hours'))}:${leftPad(this.state.objectA.currentTime.get('minutes'))}:${leftPad(this.state.objectA.currentTime.get('seconds'))}`}
                                    </h2>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="box-2">
                    <BoxTemplate currentID = {this.state.objectB.currentID} 
                                currentTime = {this.state.objectB.currentTime}
                                display = {this.props.secondDisplay}
                                 handleDisplay={this.props.handleSecondDisplay}/>
                    {/* { this.props.secondDisplay ? <h1>It's true</h1>
                     : <div>
                         <h1>It's false</h1>  <button className="plus-button plus-button--large" onClick={this.props.handleSecondDisplay}></button>
                        </div>
                } */}
                    
                </div>
                    <div className="box-3">
                        <BoxTemplate currentID = {this.state.objectC.currentID} 
                                        currentTime = {this.state.objectC.currentTime}
                                        display = {this.props.thirdDisplay}
                                        handleDisplay={this.props.handleThirdDisplay}/>
                {/* { this.props.thirdDisplay ? <h1>It's true</h1>
                     : <div>
                         <h1>It's false</h1>  <button className="plus-button plus-button--large" onClick={this.props.handleThirdDisplay}></button>
                        </div>
                } */}
                </div>
            </div>
        )
    }

}

export default TimerDisplay;