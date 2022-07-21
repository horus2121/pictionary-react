import React from "react";

const Pencil = ({ pen }) => {

    return (
        <button id="pen" onClick={pen}><img alt="pen" src="https://img.icons8.com/material-two-tone/48/undefined/pencil-tip.png" /></button>
    )
}

export default Pencil;