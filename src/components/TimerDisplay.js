import React from 'react';

import BoxTemplate from './BoxTemplate';
import { Row, Col } from 'react-bootstrap';
import './TimerDisplay.css';
import './BoxTemplate.css';

const leftPad = (val) => {
    if (val < 10) return `0${val}`;

    return `${val}`;
}


class TimerDisplay extends React.Component {
    
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
                                {`${leftPad(this.props.props1.currentTime.get('hours'))}:${leftPad(this.props.props1.currentTime.get('minutes'))}:${leftPad(this.props.props1.currentTime.get('seconds'))}`}
                                    </h2>
                            </div>
                        </Col>
                    </Row>
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