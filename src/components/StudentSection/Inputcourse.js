



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
      <div className="course-input-container">
        <input
          className="course-input-box-m1"
          type="text"
          placeholder="    e.g  Learn Photoshop from Scratch"
          maxLength={60}
          value={text}
          onChange={handleInputChange}
        />
        <span id="count-span" className="character-count">
          {count}
        </span>
      </div>
    </div>
  );
};

export default Inputcourse;

