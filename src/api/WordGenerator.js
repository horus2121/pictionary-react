import React, { useState, useEffect } from 'react';

const WordGenerator = () => {
    const [word, setWord] = useState('');

    useEffect(() => {
        async function fetchData() {
            let res = await fetch('https://random-word-api.herokuapp.com/word')
            let json = await res.json()
            setWord(json[0])
        }
        fetchData()
    }, []
    )

    return (
        <div id="wordGenerator">
            <h2>&#11088KEYWORD:</h2>
            <h2 id="wordField">{word}</h2>
            <button id="skipWord"><img src="https://img.icons8.com/external-thin-kawalan-studio/48/undefined/external-skip-forward-multimedia-thin-kawalan-studio.png" /></button>
        </div>
    )
}

export default WordGenerator;