import React from 'react';

const Display = (props) => {
    return (
        <div>
            <div className="score">
                <p>Hits/Walks: {props.hitScore}</p>
            </div>
            <div className="strike-ball">
                <p>Strikes: {props.strikeScore}</p>
                <p>Balls: {props.ballScore}</p>
            </div>
        </div>
    )
}

export default Display; 