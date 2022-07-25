import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import Pencil from './tools/Pencil';
import Eraser from './tools/Eraser';
import Bin from './tools/Bin';
import SwitchColor from './tools/SwitchColor';
import ChangeWidth from './tools/ChangeWidth';
// import DrawShape from './tools/DrawShape';

const Tools = props => {

    const { canvasRef, ctxRef, penCursor, eraserCursor, reset, handleReset } = props;
    const [eraserOn, setEraserOn] = useState(false);
    // const [activedColor, setActivedColor] = useState("black");

    const pen = () => {
        ctxRef.current.strokeStyle = "black";
        canvasRef.current.style.cursor = penCursor;
        setEraserOn(false);
    }

    const eraser = () => {
        ctxRef.current.strokeStyle = "white";
        canvasRef.current.style.cursor = eraserCursor;
        setEraserOn(true);
    }

    const bin = () => {
        ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        handleReset();
    }

    const switchColor = (nativeEvent) => {
        if (eraserOn) return;
        // ctxRef.current.strokeStyle = nativeEvent.target.value;
        // console.log(nativeEvent.target.value)
        // setActivedColor(nativeEvent.target.value);
        // console.log(activedColor)
        // ctxRef.current.strokeStyle = activedColor;
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
            {reset ? bin() : null}
        </Container>
    )
}

export default Tools;
