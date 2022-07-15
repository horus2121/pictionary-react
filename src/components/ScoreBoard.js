import React, { useState } from 'react';

const ScoreBoard = () => {
    const [numOfRose, setNumOfRose] = useState(0);
    const [numOfPoo, setNumOfPoo] = useState(0);
    let i = 0;

    const addScore = () => {

    i++;
    setNumOfRose(i)
  }

    return (
        <div id="scoreBoard">
            <button id="yes" onClick={ addScore }><img alt="yes" src="https://img.icons8.com/cotton/64/undefined/facebook-like--v2.png" /></button>
            <button id="no"><img alt="no" src="https://img.icons8.com/cotton/64/undefined/thumbs-down--v4.png" /></button>
            <button id="restart"><img alt="restart" src="https://img.icons8.com/doodle/96/undefined/replay--v1.png" /></button>
            <div id="scoreContainer">
                <p><span role="img" aria-label="jsx-ally/accessible-emoji">🌹</span><span id="plusSign">+</span><span id="numOfRose">{ numOfRose }</span></p>
                <p><span role="img" aria-label="jsx-ally/accessible-emoji">💩</span><span id="plusSign">+</span><span id="numOfPoo">{ numOfPoo }</span></p>
            </div>
        </div>
    )
}

export default ScoreBoard;
