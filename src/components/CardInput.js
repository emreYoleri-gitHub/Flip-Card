import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import alertify from "alertifyjs";

function CardInput({ words, setWords }) {
  const [input, setInput] = useState({
    id: null,
    eng: "",
    tr: "",
    example: "",
  });

  const changeEng = (e) => {
    setInput({
      ...input,
      eng: e.target.value,
    });
  };

  const changeTr = (e) => {
    setInput({
      ...input,
      tr: e.target.value,
    });
  };

  const changeExam = (e) => {
    setInput({
      ...input,
      example: e.target.value,
    });
  };

  const addWord = () => {
    if (input.eng && input.example && input.tr) {
      let words1 = [
        ...words,
        {
          id: words.length + 1,
          eng: input.eng,
          tr: input.tr,
          example: input.example,
        },
      ];

      alertify.success(`${input.eng} -  ${input.tr} added to card`);

      setInput({
        id: null,
        eng: "",
        tr: "",
        example: "",
      });
      setWords(words1);
    } else {
      alert("please complete the all space");
    }
  };
  return (
    <div className="d-flex flex-column">
      <TextField
        onChange={changeEng}
        value={input.eng}
        style={{ marginTop: "20px", width: "500px" }}
        variant="filled"
        label="English"
      />

      <TextField
        onChange={changeTr}
        value={input.tr}
        style={{ marginTop: "20px", width: "500px" }}
        variant="filled"
        label="Turkish"
      />

      <TextField
        onChange={changeExam}
        value={input.example}
        style={{ marginTop: "20px", width: "500px" }}
        variant="filled"
        label="Example"
      />
      <Button
        onClick={addWord}
        style={{ marginTop: "20px" }}
        variant="contained"
        color="primary"
      >
        Add
      </Button>
    </div>
  );
}

export default CardInput;
