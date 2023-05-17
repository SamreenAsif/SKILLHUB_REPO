import React, { useState } from "react";
import "./Create1.css";

import { useNavigate } from "react-router-dom";
import Stepnav from "./Stepnav";

const Create1 = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("./Create2");
  };

  const variable = 1;
  const handleClick = () => {
    setButtonDisabled(false);
  };

  return (
    <div className="coursepage">
      <Stepnav />

      <h1 className="line">
        First, let's find out what type of course you're making.
      </h1>

      <div className="parent">
        <div className="coupon1" onClick={handleClick}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYVIGhesE0HfzXL4YlwExi9zAMn9b6Q72Lp5Or_2TjQqBFk5izMsYeWc&usqp=CAU"
            height="90px"
            width="90px"
            alt ="coupon 1"
          ></img>

          <span className="line2">Course</span>
          <p id="p">
            Create rich Learning experience with the help of video lectures,
            quizzes , coding ,exercises etc.
          </p>
        </div>
        <div className="coupon2" onClick={handleClick}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6wtM1ux-GVwq4jgk1dmQs-eAJxDY1sOEIV3aOoAT3cpyYhW3d1_fGj-Q_eNVNQevwK0&usqp=CAU"
            height="90px"
            width="90px"
          ></img>
         
          <span className="line3">Practice Test</span>
  
          <p id="p">
            Help Students prepare for certification exams by providing practice
            questions
          </p>
        </div>
      </div>
  
      <div className="footer1">
        <button className="continue1" onClick={handleClick1}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Create1;
