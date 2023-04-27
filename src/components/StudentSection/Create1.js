/*import React from "react";
import './Create1.css';
import { useState } from "react";


const Create1 =()=>
{

    const [divClicked, setDivClicked] = useState(false);

    const handleClick = () => {
        setDivClicked(true);
      };
    
return(
    <div className="coursepage">
  <div className="header">

    <div className="leftside">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqadFfsg0RzL20jDq5gFaQN9gDLFxNJvvH8SKWI6h-QS60ujlrF4QexA&usqp=CAU" height="80px" width="170px"/>
<div  className="vertical"></div>

<span className="step">Step 1 of 4</span>
</div>
<button className="b1">Exit</button>
  </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
 <span className="line">First, let's find out what type of course you're making.</span>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>

<div className="parent">
 <div className="coupon1" onClick={handleClick}>
    <br></br>
    
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYVIGhesE0HfzXL4YlwExi9zAMn9b6Q72Lp5Or_2TjQqBFk5izMsYeWc&usqp=CAU" height="90px" width="90px"></img>
    <br></br>
    <br></br>
    <br></br>

    <span className="line2">Course</span>
    <br></br>
    <p id="p">Create rich Learning experience with the help of video lectures, quizzes , coding ,exercises etc.
    </p>
    </div>


    <div className="coupon2" onClick={handleClick}>
    <br></br>
    
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6wtM1ux-GVwq4jgk1dmQs-eAJxDY1sOEIV3aOoAT3cpyYhW3d1_fGj-Q_eNVNQevwK0&usqp=CAU" height="90px" width="90px"></img>
    <br></br>
    <br></br>
    <br></br>

    <span className="line3">Practice Test</span>
    <br></br>
    <p id="p">Help Students prepare for certification exams by providing practice questions 
    </p>
    </div>
    </div>
    <br></br>
    <br></br>
    <div className="header1">
      <button  disabled>Continue</button>
  </div>
  </div>
  
);

};

export default Create1;*/



import React, { useState } from "react";
import './Create1.css';

import { useNavigate } from "react-router-dom";
import Stepnav from './Stepnav';

const Create1 = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const handleClick1 = () => {
  
    navigate('./Create2');

  };
 
  
  const variable=1;
  const handleClick = () => {
    setButtonDisabled(false);
  };

  return (
    <div className="coursepage">
    <Stepnav/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <span className="line">First, let's find out what type of course you're making.</span>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="parent">
        <div className="coupon1" onClick={handleClick}>
          <br></br>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYVIGhesE0HfzXL4YlwExi9zAMn9b6Q72Lp5Or_2TjQqBFk5izMsYeWc&usqp=CAU" height="90px" width="90px"></img>
          <br></br>
          <br></br>
          <br></br>
          <span className="line2">Course</span>
          <br></br>
          <p id="p">Create rich Learning experience with the help of video lectures, quizzes , coding ,exercises etc.
          </p>
        </div>
        <div className="coupon2" onClick={handleClick}>
          <br></br>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6wtM1ux-GVwq4jgk1dmQs-eAJxDY1sOEIV3aOoAT3cpyYhW3d1_fGj-Q_eNVNQevwK0&usqp=CAU" height="90px" width="90px"></img>
          <br></br>
          <br></br>
          <br></br>
          <span className="line3">Practice Test</span>
          <br></br>
          <p id="p">Help Students prepare for certification exams by providing practice questions
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="header1">
    <button className="continue1"  onClick={handleClick1} >Continue</button>
  </div>
    </div>
  );
};

export default Create1;







