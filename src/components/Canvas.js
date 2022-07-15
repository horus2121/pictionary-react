import React, { useEffect, useRef } from 'react';

const Canvas = props => {

    const canvasRef = useRef(null);
    const { startDrawing, endDrawing, draw } = props;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

    }, [draw]
    )

    return (
        <div id='container-canvas'>
            <canvas id='canvas'
                ref={canvasRef}
                onMouseDown={e => startDrawing(e)}
                onMouseUp={ctx => endDrawing(ctx)}
                onMouseMove={(e, ctx) => draw(e, ctx)}></canvas>
        </div>
    )
}

export default Canvas;