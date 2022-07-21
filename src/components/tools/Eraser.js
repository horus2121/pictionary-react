import React from "react";

const Eraser = ({ eraser }) => {

    return (
        <button id="eraser" onClick={eraser}><img alt="eraser" src="https://img.icons8.com/material-two-tone/48/undefined/eraser.png" /></button>
    )
}

export default Eraser;