import React from "react";
import "./Create1.css";
import Stepnav from "./Stepnav";
import { useNavigate } from "react-router-dom";
import Inputcourse from "./Inputcourse";
import "./Create2.css";
const Create2 = () => {
  const navigate = useNavigate();
  const gotoPage = () => {
    navigate("./Create3");
  };
  return (
    <div className="coursepage">
      <Stepnav />
      <div className="course-page2-container">
        <h1 className="line">How about a working title ?</h1>
        <span className="titleline">
          It's ok if you can't think of a good title now. You can change it
          later.
        </span>
        <Inputcourse />
      </div>
      <div className="footer1">
        <button className="continue1" onClick={gotoPage}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Create2;
