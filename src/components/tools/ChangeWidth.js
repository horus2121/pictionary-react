import React from "react";

const widths = [
    {
        label: "2",
        value: "2"
    },
    {
        label: "4",
        value: "4"
    },
    {
        label: "6",
        value: "6"
    },
    {
        label: "8",
        value: "8"
    },
    {
        label: "10",
        value: "10"
    },
    {
        label: "12",
        value: "12"
    },
    {
        label: "14",
        value: "14"
    },
    {
        label: "16",
        value: "16"
    },
];

const ChangeWidth = ({ ChangeWidth }) => {

    const renderedWidths = widths.map(width => {
        return (
            <option key={width.value}>{width.label}</option>
        )
    });

    return (
        <select id="width" onChange={ChangeWidth}>
            {renderedWidths}
        </select>
    )
}

export default ChangeWidth;