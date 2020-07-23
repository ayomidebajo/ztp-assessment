import React from "react";
import { useState } from "react";
// import Loading from "../loading/Loading";

const AsideInput = ({ Movies, locate }) => {
  const [text, setText] = useState("game of thrones");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const keyPressHandler = async (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      // locate(e.target.value);
      Movies(text);
      setText("");
    }
  };

  return (
    <div className="input--container">
      <input
        onChange={changeHandler}
        onKeyDown={keyPressHandler}
        value={text}
        type="text"
        className="input-field"
        placeholder="search here"
      />
    </div>
  );
};

export default AsideInput;
