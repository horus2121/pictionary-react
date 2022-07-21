import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';

const WordGenerator = () => {
  const [word, setWord] = useState('');
  const [click, setClick] = useState(false);

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

    fetchData();

  }, [click]
  )

  return (
    <Container id="wordGenerator">
      <Typography id="keyword"><span role="img" aria-label="jsx-ally/accessible-emoji">⭐</span>KEYWORD:</Typography>
      {word ?
        <Typography id="wordField">{word}</Typography>
        : (
          <Container>
            <Typography id="wordField">Click the button below</Typography>
            <Typography id="wordField">to start or skip word</Typography>
          </Container>
        )}
      <button id="skipWord" onClick={onClick}><img alt="skipword" src="https://img.icons8.com/external-thin-kawalan-studio/48/undefined/external-skip-forward-multimedia-thin-kawalan-studio.png" /></button>
    </Container>
  )
}

export default WordGenerator;
