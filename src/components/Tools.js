import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import Pencil from './tools/Pencil';
import Eraser from './tools/Eraser';
import Bin from './tools/Bin';
import SwitchColor from './tools/SwitchColor';
import ChangeWidth from './tools/ChangeWidth';
// import DrawShape from './tools/DrawShape';

const Tools = props => {

    const { canvasRef, ctxRef } = props;
    const [eraserOn, setEraserOn] = useState(false);

    const pen = () => {
        ctxRef.current.strokeStyle = "black";
        // canvas.style.cursor = penCursor;
        setEraserOn(false);
    }

    const eraser = () => {
        ctxRef.current.strokeStyle = "white";
        // canvas.style.cursor = eraserCursor;
        setEraserOn(true);
    }

    const bin = () => {
        ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    const switchColor = ({ nativeEvent }) => {
        if (eraserOn) return;
        ctxRef.current.strokeStyle = nativeEvent.target.value;
    }

    const changeWidth = ({ nativeEvent }) => {
        ctxRef.current.lineWidth = nativeEvent.target.value;
    }

    return (
        <Container id="menu">
            <Pencil pen={pen} />
            <Eraser eraser={eraser} />
            <Bin bin={bin} />
            <SwitchColor switchColor={switchColor} />
            <ChangeWidth changeWidth={changeWidth} />
            {/* <DrawShape /> */}
        </Container>
    )
}

export default Tools;
