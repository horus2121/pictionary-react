import React from "react";
import { Button } from "@material-ui/core";

const AddPoo = props => {

    const { addPoo } = props;

    return (
        <Button id="no" onClick={addPoo}><img alt="no" src="https://img.icons8.com/cotton/64/undefined/thumbs-down--v4.png" /></Button>
    )
}

export default AddPoo;