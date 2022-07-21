import React from "react";

const Bin = ({ bin }) => {

    return (
        <button id="bin" onClick={bin}><img alt="bin" src="https://img.icons8.com/plumpy/96/undefined/empty-trash.png" /></button>
    )
}

export default Bin;