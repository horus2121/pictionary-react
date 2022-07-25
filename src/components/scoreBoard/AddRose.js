import React from "react";
import { Button } from "@material-ui/core";

const AddRose = props => {

    const { addRose } = props;

    return (
        <Button id="yes" onClick={addRose}><img alt="yes" src="https://img.icons8.com/cotton/64/undefined/facebook-like--v2.png" /></Button>
    )
}

export default AddRose;