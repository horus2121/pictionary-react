import React from "react";

const colors = [
    {
        label: "Black",
        value: "#000000"
    },
    {
        label: "Red",
        value: "#FF0000"
    },
    {
        label: "Blue",
        value: "#0000CC"
    },
    {
        label: "Green",
        value: "#006600"
    },
    {
        label: "Yellow",
        value: "#FFFF00"
    },
    {
        label: "Orange",
        value: "#FFA500"
    },
    {
        label: "Purple",
        value: "#990099"
    },
];

const SwitchColor = ({ switchColor }) => {

    const renderedColors = colors.map(color => {
        return (
            <option key={color.value}>{color.label}</option>
        )
    });

    return (
        <select id="color" onChange={switchColor}>
            {renderedColors}
        </select>
    )
}

export default SwitchColor;