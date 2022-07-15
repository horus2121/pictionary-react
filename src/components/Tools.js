import React from 'react';

const Tools = () => {

    return (
        <div id="menu">
            <button id="pen"><img src="https://img.icons8.com/material-two-tone/48/undefined/pencil-tip.png" /></button>
            <button id="eraser"><img src="https://img.icons8.com/material-two-tone/48/undefined/eraser.png" /></button>
            <button id="clear"><img src="https://img.icons8.com/plumpy/96/undefined/empty-trash.png" /></button>
            <select id="color">
                <option value="#000000">Black</option>
                <option value="#FF0000">Red</option>
                <option value="#0000CC">Blue</option>
                <option value="#006600">Green</option>
                <option value="#FFFF00">Yellow</option>
                <option value="#FFA500">Orange</option>
                <option value="#990099">Purple</option>
            </select>
            <select id="width">
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
            </select>
            <select id="shape">
                <option value="circle">Circle</option>
                <option value="triangle">Triangle</option>
                <option value="tectangle">Tectangle</option>
            </select>
        </div>
    )
}

export default Tools;