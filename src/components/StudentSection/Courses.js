import React from "react";
import { useNavigate } from "react-router-dom";
import "./Courses.css";
const Courses = () => {
  const navigate = useNavigate();
  const gotoPage = () => {
    navigate("./Create1");
  };
  return (
    <div className="coupon">
      <label className="course-label ">Jump into Course Creation</label>
      <div
        className="LinkButton"
        style={{
          "--height": "8rem",
          "--width": "22rem",
          "--font-size": "2rem",
          "border-radius": "8px",
          border: "none",
        }}
        onClick={gotoPage}
      >
        Create Your Course
      </div>
      {/* <button className="course-nav-btn" onClick={gotoPage}>
        Create Your Course
      </button> */}
    </div>
  );
};

export default Courses;
