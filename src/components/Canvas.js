import React, { useState, useEffect, useRef } from 'react';
import { Container } from '@material-ui/core';
import Tools from './Tools';

const penCursor = "url('https://img.icons8.com/ios-glyphs/30/undefined/quill-pen.png') 0 30, auto"
const eraserCursor = "url('https://img.icons8.com/metro/26/undefined/eraser.png') 0 26, auto"

const Canvas = props => {

    const { reset, handleReset } = props;
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.height = window.innerHeight * 0.5;
        canvas.width = window.innerWidth * 0.5;

        ctx.lineCap = "round";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        canvasRef.current.style.cursor = penCursor;
        ctxRef.current = ctx;
    }, []
    )

    const startDrawing = ({ nativeEvent }) => {
        const { clientX, clientY, target: { offsetLeft, offsetTop } } = nativeEvent;
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(clientX - offsetLeft, clientY - offsetTop);
        setIsDrawing(true);
    }

    const endDrawing = () => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    }

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) return;

        const { clientX, clientY, target: { offsetLeft, offsetTop } } = nativeEvent;
        ctxRef.current.lineTo(clientX - offsetLeft, clientY - offsetTop);
        ctxRef.current.stroke();
    }

    return (
        <Container id='container-canvas'>
            <canvas id='canvas'
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseMove={draw}></canvas>
            <Tools
                reset={reset}
                handleReset={handleReset}
                ctxRef={ctxRef}
                canvasRef={canvasRef}
                penCursor={penCursor}
                eraserCursor={eraserCursor} />
        </Container>
    )
}

export default Canvas;