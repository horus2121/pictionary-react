import React from 'react';

const ScoreBoard = () => {

    return (
        <div id="scoreBoard">
            <button id="yes"><img src="https://img.icons8.com/cotton/64/undefined/facebook-like--v2.png" /></button>
            <button id="no"><img src="https://img.icons8.com/cotton/64/undefined/thumbs-down--v4.png" /></button>
            <button id="restart"><img src="https://img.icons8.com/doodle/96/undefined/replay--v1.png" /></button>
            <div id="scoreContainer">
                <p>&#127801<span id="plusSign">+</span><span id="numOfRose">0</span></p>
                <p>&#128169<span id="plusSign">+</span><span id="numOfPoo">0</span></p>
            </div>
        </div>
    )
}

export default ScoreBoard;