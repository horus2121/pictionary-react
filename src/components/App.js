import React from 'react';
import { Container, Typography } from '@material-ui/core';
import './App.css';
import WordGenerator from '../api/WordGenerator';
import Canvas from './Canvas';
import ScoreBoard from './ScoreBoard';

const App = () => {

    return (
        <Container>
            <Typography id="pictionary">PICTIONARY</Typography>
            <WordGenerator />
            <Canvas />
            <ScoreBoard />
        </Container>
    )
}

export default App;
