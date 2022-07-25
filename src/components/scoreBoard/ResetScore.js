import React from "react";
import { Button } from "@material-ui/core";

const ResetScore = props => {

    const { resetScore } = props;

    return (
        <Button id="resetScore" onClick={resetScore}><img alt="reset score" src="https://img.icons8.com/doodle/96/undefined/replay--v1.png" /></Button>
    )
}

export default ResetScore;
