import React from 'react';
import './App.css';
import WordGenerator from '../api/WordGenerator';
import Canvas from './Canvas';
import ScoreBoard from './ScoreBoard';

const App = () => {

    return (
        <div>
            <h1>PICTIONARY</h1>
            <WordGenerator />
            <Canvas />
            <ScoreBoard />
        </div>
    )
}

export default App;
