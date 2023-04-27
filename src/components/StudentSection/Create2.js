import React from "react";
import './Create1.css';
import Stepnav from "./Stepnav";
import { useNavigate } from "react-router-dom";
import Inputcourse from './Inputcourse';
import './Create2.css';
const Create2 =()=>
{
  const navigate = useNavigate();
  const gotoPage = ()=>{
    navigate("./Create3");
  }
    return (
        <div className="coursepage">
        <Stepnav/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span className="line">How about a working title ?</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span className="titleline">It's ok if you can't think of a good title now. You can change it later.</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
         
          <Inputcourse/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="header1">
    <button className="continue"  onClick={gotoPage}>Continue</button>
  </div>
        </div>
      );
}

export default Create2;