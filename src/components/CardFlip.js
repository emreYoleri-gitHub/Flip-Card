import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "@material-ui/core";

function CardFlip({ word, order, increase, decrease, words }) {
  const initialState1 = {
    /* ön */ height: " 300px",
    width: "300px",
    backgroundColor: "#F5B041",
    color: "#212F3D",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "30px",
  };

  const initialState2 = {
    height: " 300px",
    width: "300px",
    backgroundColor: "#212F3D",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "30px",
  };
  const [style1, setStyle1] = useState(initialState1);
  const [style2, setStyle2] = useState(initialState2);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/* HORİZONTAL YAN YANA DÖNDÜRMEK İÇİN */}
        <div style={style1} onClick={handleClick}>
          <h1>{word.eng}</h1>
          <br />
          <br />
          <h3>"{word.example}"</h3>
        </div>

        <div style={style2} onClick={handleClick}>
          <h1>{word.tr}</h1>
        </div>
      </ReactCardFlip>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Button
          disabled={order === words.length}
          onClick={increase}
          variant="contained"
          color="primary"
        >
          next
        </Button>

        <Button
          disabled={order === 1}
          onClick={decrease}
          variant="contained"
          color="primary"
        >
          previous
        </Button>
      </div>
    </div>
  );
}

export default CardFlip;
