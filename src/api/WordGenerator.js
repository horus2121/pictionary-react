import React, { useState, useEffect } from 'react';

const WordGenerator = () => {
    const [word, setWord] = useState('');
    const [click, setClick] = useState(false);
    const [count, setCount] = useState(0);

    const onClick = () => {
    setClick(!click);
  }

    useEffect(() => {
        async function fetchData() {
          try {
            let res = await fetch('https://random-word-api.herokuapp.com/word')
            let json = await res.json()
            setWord(json[0])
          } catch {
            setWord('No word found!')
            }
        }

        if (count === 0) {
          setCount(1);
        } else { 
        fetchData()
        }
    }, [click]
    )

    return (
        <div id="wordGenerator">
            <h2><span role="img" aria-label="jsx-ally/accessible-emoji">⭐</span>KEYWORD:</h2>
              { word ? 
                <h2 id="wordField">{ word }</h2>
                : (
          <div>
            <h2 style={ {fontSize: "1.5rem"} } id="wordField">Click the button below</h2>
            <h2 style={ {fontSize: "1.5rem"} } id="wordField">to start or skip word</h2>
            </div>
          )}
            <button id="skipWord" onClick={onClick}><img alt="skipword" src="https://img.icons8.com/external-thin-kawalan-studio/48/undefined/external-skip-forward-multimedia-thin-kawalan-studio.png" /></button>
        </div>
    )
}

export default WordGenerator;
