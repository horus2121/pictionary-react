import React from 'react';
import './App.css';
import WordGenerator from '../api/WordGenerator';
import Canvas from './Canvas';
import Tools from './Tools';
import ScoreBoard from './ScoreBoard';

const App = () => {

    let paint = false;

    const draw = (e, ctx) => {
        if (!paint) return;

        ctx.lineTo(e.clientX - ctx.canvas.offsetLeft, e.clientY - ctx.canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - ctx.canvas.offsetLeft, e.clientY - ctx.canvas.offsetTop);
    }

    const startDrawing = e => {
        paint = true;
        draw(e);
    }

    const endDrawing = ctx => {
        paint = false;
        // ctx.beginPath();
    }

    return (
        <div>
            <WordGenerator />
            <Canvas
                startDrawing={startDrawing}
                endDrawing={endDrawing}
                draw={draw} />
            <Tools />
            <ScoreBoard />
        </div>
    )
}

export default App;