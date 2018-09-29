import React from 'react';

import BoxTemplate from './BoxTemplate';
import TimerButton from './TimerButton';
import * as timerStates from '../timerStates';
import moment from 'moment';
import './TimerDisplay.css';
import './BoxTemplate.css';



class TimerDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            currentID: '1',
            timerStateA: timerStates.NOT_SET,
            currentTimeA: moment.duration(25, 'minutes'),
            baseTimeA: moment.duration(25, 'minutes'),
            timerA: null,
            displayA: true,
            objectA: {abc: '1',
                    currentTime: moment.duration(25, 'minutes'),
                    baseTime: moment.duration(25, 'minutes'),
                    timerState: timerStates.NOT_SET,
                    timer: null,
                    display: true
                    },
            objectB: {
                currentID: '2',
                abc: '2',
                currentTime: moment.duration(10, 'minutes'),
                baseTime: moment.duration(25, 'minutes'),
                timerState: timerStates.NOT_SET,
                timer: null,
                
            },
            objectC: {
                currentID: '3',
                abc: '3',
                currentTime: moment.duration(5, 'minutes'),
                baseTime: moment.duration(25, 'minutes'),
                timerState: timerStates.NOT_SET,
                timer: null,
                
            },
        };

        this.startTimerA = this.startTimerA.bind(this);
        this.reduceTimerA = this.reduceTimerA.bind(this);
    }

    startTimerA() {
        console.log("I called startTimer");
   
        this.setState({
            timerStateA: timerStates.RUNNING,
            timerA: setInterval(this.reduceTimerA(), 1000)
        })
        
        
    }

    stopTimer(){
        if (this.state.timer) {
            clearInterval(this.state.timer);
        }

        this.setState({
            timerState: timerStates.NOT_SET,
            timer: null,
            currentTime: moment.duration(this.state.baseTime)
        })
    }

    reduceTimerA(){
        console.log('Reduce timer was called');
        if (this.state.currentTimeA.get('hours') === 0
            && this.state.currentTimeA.get('minutes') === 0
            && this.state.currentTimeA.get('seconds') === 0
        ) {
            this.resetTimer();
            return;
        }
        
        const newTime = moment.duration(this.state.currentTimeA);
        newTime.subtract(1, 'second');

        this.setState({
            currentTimeA: newTime
        })
    }

    resetTimer(){
        if (this.state.timer) {
            clearInterval(this.state.timer);
        }

        this.setState({
            timerState: timerStates.COMPLETE,
            timer: null,
        })
    }

    render(){
        console.log(this.props);    

        return (
            <div className="container-1">
                <div className="box-1"> 
                <BoxTemplate currentID = {this.state.objectA.currentID} 
                                currentTime = {this.state.currentTimeA}
                                display = {this.state.displayA}
                                />
                <TimerButton currentID={this.state.currentID} startTimer={this.startTimerA}
                 stopTimer={this.stopTimer} resetTimer={this.resetTimer}
                 timerState={this.state.timerStateA} />
                    {/* <Row className="show-grid">
                        <Col className="show-grid" xs={12} md={12}>
                            <div className="text-primary">
                                
                                <h2 className="text-left" 
                                style={{ fontSize:'8rem'}}>
                                {`${leftPad(this.state.objectA.currentTime.get('hours'))}:${leftPad(this.state.objectA.currentTime.get('minutes'))}:${leftPad(this.state.objectA.currentTime.get('seconds'))}`}
                                    </h2>
                            </div>
                        </Col>
                    </Row> */}
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