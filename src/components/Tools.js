import React, { useState } from 'react';
import Pencil from './tools/Pencil';
import Eraser from './tools/Eraser';
import Bin from './tools/Bin';
import SwitchColor from './tools/SwitchColor';
import ChangeWidth from './tools/ChangeWidth';
// import DrawShape from './tools/DrawShape';

const Tools = props => {

    const { canvasRef, ctxRef } = props;
    // eslint-disable-next-line
    const [eraserOn, setEraserOn] = useState(false);
    const [activedColor, setActivedColor] = useState("#000000");

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

    const switchColor = () => {
        // ctxRef.current.strokeStyle = activedColor;
    }

    const changeWidth = () => {
        // ctxRef.current.lineWidth = changeWidthButton.value;
    }

    return (
        <div id="menu">
            <Pencil pen={pen} />
            <Eraser eraser={eraser} />
            <Bin bin={bin} />
            <SwitchColor switchColor={switchColor} />
            <ChangeWidth changeWidth={changeWidth} />
            {/* <DrawShape /> */}
        </div>
    )
}

export default Tools;
