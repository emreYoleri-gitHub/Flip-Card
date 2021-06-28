import React, { useState } from "react";
import CardFlip from "./CardFlip";
import CardInput from "./CardInput";
import { Button } from "@material-ui/core";

function CardList() {
  const [words, setWords] = useState([
    {
      id: 1,
      eng: "bring",
      tr: "getirmek",
      example: "Bring it",
    },

    {
      id: 2,
      eng: "go",
      tr: "gitmek",
      example: "Go home",
    },

    {
      id: 3,
      eng: "find",
      tr: "bulmak",
      example: "Find it",
    },
  ]);
  const [operation, setOperation] = useState(false);
  const wordsCard = () => {
    setOperation(true);
  };
  const addWord = () => {
    setOperation(false);
  };

  const [order, setOrder] = useState(1);
  const increase = () => {
    setOrder((prevState) => prevState + 1);
  };

  const decrease = () => {
    setOrder((prevState) => prevState - 1);
  };

  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Button onClick={wordsCard} variant="contained" color="secondary">
          Word's Cards
        </Button>

        <Button onClick={addWord} variant="contained" color="secondary">
          Add Word
        </Button>
      </div>
      {operation ? (
        words.map((word) => {
          if (word.id === order) {
            return (
              <CardFlip
                key={word.id}
                word={word}
                increase={increase}
                decrease={decrease}
                order={order}
                words={words}
              />
            );
          }
        })
      ) : (
        <CardInput words={words} setWords = {setWords}/>
      )}
    </div>
  );
}

export default CardList;
