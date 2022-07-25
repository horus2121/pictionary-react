import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';

const WordGenerator = props => {

  const { handleReset } = props;
  const [word, setWord] = useState('');
  const [wordBuffer, setWordBuffer] = useState('');
  const [click, setClick] = useState(0);

  const onClick = () => {
    setClick(click + 1);
    handleReset();
  }

  useEffect(() => {

    async function fetchWord() {
      try {
        let res = await fetch('https://random-word-api.herokuapp.com/word')
        let json = await res.json()
        setWordBuffer(json[0])
      } catch {
        setWordBuffer('No word found!')
      }
    }

    fetchWord();

  }, [click]
  )

  useEffect(() => {

    (wordBuffer && click) ? setWord(wordBuffer) : setWord("Click the button below to start or skip word")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordBuffer]
  )

  return (
    <Container id="wordGenerator" maxWidth="xs" >
      <Typography id="keyword"><span role="img" aria-label="jsx-ally/accessible-emoji">⭐</span>KEYWORD:</Typography>
      <Typography id="wordField">{word}</Typography>
      <button id="skipWord" onClick={onClick}><img alt="skipword" src="https://img.icons8.com/external-thin-kawalan-studio/48/undefined/external-skip-forward-multimedia-thin-kawalan-studio.png" /></button>
    </Container>
  )
}

export default WordGenerator;
