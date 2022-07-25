import React, { useState } from 'react';
import { Container, Typography, ButtonGroup } from '@material-ui/core';
import AddRose from './scoreBoard/AddRose';
import AddPoo from './scoreBoard/AddPoo';
import ResetScore from './scoreBoard/ResetScore';

const ScoreBoard = () => {

    const [numOfRose, setNumOfRose] = useState(0);
    const [numOfPoo, setNumOfPoo] = useState(0);

    const addRose = () => {
        setNumOfRose(numOfRose + 1)
    }

    const addPoo = () => {
        setNumOfPoo(numOfPoo + 1)
    }

    const resetScore = () => {
        setNumOfRose(0);
        setNumOfPoo(0);
    }

    return (
        <Container id="scoreBoard">
            <ButtonGroup variant="text" aria-label="text button group">
                <AddRose addRose={addRose} />
                <AddPoo addPoo={addPoo} />
                <ResetScore resetScore={resetScore} />
            </ButtonGroup>
            <Container id="scoreContainer">
                <Typography variant="h4"><span role="img" aria-label="jsx-ally/accessible-emoji">🌹</span><span id="plusSign">+</span><span id="numOfRose">{numOfRose}</span></Typography>
                <Typography variant="h4"><span role="img" aria-label="jsx-ally/accessible-emoji">💩</span><span id="plusSign">+</span><span id="numOfPoo">{numOfPoo}</span></Typography>
            </Container>
        </Container>
    )
}

export default ScoreBoard;
