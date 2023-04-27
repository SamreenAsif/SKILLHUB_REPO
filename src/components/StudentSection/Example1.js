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
import "./Example1.css";

const Example1 = (props) => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(160);
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState('');
  const handleDelete = () => {
    // Remove the input box from state
    // This will cause it to be removed from the DOM
    alert("hello");
    setTextValue('');
  }

  function handleInputChange(event) {
    setTextValue(event.target.value);
    const inputText = event.target.value;
    if (inputText.length <= 160) {
      setText(inputText);
      setCount(160 - inputText.length);
    }
  }

  return (
    <div>
      <div className="input-container">
      {isEditing && <button onClick={handleDelete}>🗑</button>}
        <input
          className="addcourse"
          type="text"
          placeholder="   Example :  Define the Roles and Responsibilities of a Project Manager"
          maxLength={160}
          value={textValue}
          onChange={handleInputChange} 
          onFocus={() => setIsEditing(true)}
          onBlur={() => setIsEditing(false)}
        />
        &nbsp;&nbsp;<span id="count" className="character-count">
          {count}
        </span>
      </div>
    </div>
  );
};

export default Example1;

