import React from "react";
import "./Create1.css";
import { useNavigate } from "react-router-dom";
const Stepnav = () => {
  const navigate = useNavigate();
  const gotoPage = () => {
    navigate("../../teaching");
  };
  return (
    <div className="c1-header">
      <div className="leftside">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqadFfsg0RzL20jDq5gFaQN9gDLFxNJvvH8SKWI6h-QS60ujlrF4QexA&usqp=CAU"
          height="80px"
          width="170px"
        />
        <div className="vertical"></div>
        <span className="step">Step 1 of 4</span> 
      </div>
      <button className="course-exit-btn" onClick={gotoPage}>
        Exit
      </button>
    </div>
  );
};

export default Stepnav;
