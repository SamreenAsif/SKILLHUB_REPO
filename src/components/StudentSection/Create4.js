import React from "react";
import './Create1.css';
import Stepnav from "./Stepnav";
import './Create4.css';
import { useNavigate } from "react-router-dom";
import Workinghours from './Workinghours';
const Create4 =()=>
{
  const navigate = useNavigate();
  const gotoPage = ()=>{
    navigate("./Aboutcourse");
  }
    return (
        <div className="coursepage">
        <Stepnav/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span className="line">How much time can you spend creating your course per week?</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span className="titleline">There's no wrong answer. We can help you achieve your goals even if you don't have much time..</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
         <Workinghours/>
    
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="header1">
    <button className="continue" onClick={gotoPage}>Continue</button>
  </div>  
        </div>
      );
}

export default Create4;