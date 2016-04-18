import React from 'react';
import style from './style.scss';

class TimeMachine extends React.Component {

    render() {

        return (
            <div className="timemachine">

                <div>År: {this.props.year}</div>
                <button onClick={this.props.handleClick}>Warp</button>

            </div>
        );
    }

}

export default TimeMachine;

