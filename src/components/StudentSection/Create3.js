import React from "react";
import './Create1.css';
import Stepnav from "./Stepnav";
import './Create3.css';
import { useNavigate } from "react-router-dom";
import Selectcategory from "./Selectcategory";
const Create3 =()=>
{
  const navigate = useNavigate();
  const gotoPage = ()=>{
    navigate("./Create4");
  }
    return (
        <div className="coursepage">
        <Stepnav/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span className="line">What category best fits the knowledge you'll share?</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span className="titleline">If you're not sure about the right category, you can change it later.</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
         
         <Selectcategory/>
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
    <button className="continue" onClick={gotoPage}>Continue</button>
  </div>
        </div>
      );
}

export default Create3;