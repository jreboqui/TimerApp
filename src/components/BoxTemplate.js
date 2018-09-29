import React from 'react';

import { Row, Col } from 'react-bootstrap';
import './TimerDisplay.css';
import './BoxTemplate.css';

const leftPad = (val) => {
    if (val < 10) return `0${val}`;

    return `${val}`;
}

class BoxTemplate extends React.Component {
    
    render() {
    console.log(this.props.display);
    if (this.props.display){
        return(
            
            <Row className="show-grid">
                <Col className="show-grid" xs={12} md={12}>
                    <div className="text-primary">
                        
                        <h2 className="text-left" 
                        style={{ fontSize:'8rem'}}>
                        {`${leftPad(this.props.currentTime.get('hours'))}:${leftPad(this.props.currentTime.get('minutes'))}:${leftPad(this.props.currentTime.get('seconds'))}`}
                            </h2>
                    </div>
                </Col>
            </Row>
          
        )
    }
    else {
        return (
            <div>
            <h1>It's false</h1>
            <h2>currentId is {`${this.props.currentID}`}</h2>
            
            <button className="plus-button plus-button--large" id={this.props.currentID} onClick={this.props.handleDisplay}></button>
            </div>
        )
    }
    
    

    }
}

export default BoxTemplate;