import React from "react";
import { useNavigate } from "react-router-dom";
import './Courses.css';
const Courses = () => {
  const navigate = useNavigate();
  const gotoPage = ()=>{
    navigate("./Create1");
  }
  return (
    <div className="coupon">
      <label className="course-label ">Jump into Course Creation</label>
      <button className="course-nav-btn" onClick={gotoPage}>Create Your Course</button>
    </div>
  );
};


export default Courses
