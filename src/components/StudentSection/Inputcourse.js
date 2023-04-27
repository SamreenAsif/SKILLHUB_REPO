/*import React, { useState } from "react";
import './Inputcourse.css';
const Inputcourse =(props) => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(60);
  function handleInputChange(event) {
    const inputText = event.target.value;
    if (inputText.length <= 60) {
      setText(inputText);
      setCount(60 - inputText.length);
    }
  }

  return (
    <div >
    <input className="addcourse"
      type="text"
      placeholder="    e.g  Learn Photoshop from Scratch"
      maxLength={60}
      value={text}
      onChange={handleInputChange}
    />
      <span id="count" className="character-count">
          {count}
        </span>
    </div>
  );
}


export default Inputcourse;*/



import React, { useState } from "react";
import "./Inputcourse.css";

const Inputcourse = (props) => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(60);

  function handleInputChange(event) {
    const inputText = event.target.value;
    if (inputText.length <= 60) {
      setText(inputText);
      setCount(60 - inputText.length);
    }
  }

  return (
    <div>
      <div className="input-container">
        <input
          className="addcourse"
          type="text"
          placeholder="    e.g  Learn Photoshop from Scratch"
          maxLength={60}
          value={text}
          onChange={handleInputChange}
        />
        <span id="count" className="character-count">
          {count}
        </span>
      </div>
    </div>
  );
};

export default Inputcourse;

