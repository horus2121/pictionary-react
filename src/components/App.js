import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import './App.css';
import WordGenerator from '../api/WordGenerator';
import Canvas from './Canvas';
import ScoreBoard from './ScoreBoard';

const App = () => {
    const [reset, setReset] = useState(false);

    const handleReset = () => {
        setReset(!reset);
    }

    return (
        <Container>
            <Typography id="pictionary">PICTIONARY</Typography>
            <WordGenerator handleReset={handleReset} />
            <Canvas handleReset={handleReset} reset={reset} />
            <ScoreBoard />
        </Container>
    )
}

export default App;
