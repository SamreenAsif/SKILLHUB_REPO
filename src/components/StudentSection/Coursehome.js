import React from "react";
import Coursecard from "./Coursecard";
import "./Coursehome.css";
import CourseNavigation from "./CourseNavigation";
const Coursehome = () => {
  return (
    <>
      <div class="ml-heading1">
        <h1 id="ml-heading">My Learnings </h1>
        <br></br>
        <br></br>
        <CourseNavigation/>
      </div>

      <Coursecard />
    </>
  );
};
export default Coursehome;
