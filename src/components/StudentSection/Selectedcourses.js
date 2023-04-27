/*import React from 'react'
import Video from './Video';
import Contents from './Contents';
import Navigation from "./Navigation";
import "./Navigation.css";
import "./Selectedcourses.css";
const Selectedcourses =() => {
  return (
    <>
    <div className = "heading"><h1>SkillHub </h1></div>
    <div class="container">
  <div class="heading1">
    <h4>The Complete Financial Analyst Course 2023</h4>
  </div>
</div>
    <br></br>
  
  <br></br>
  <br></br>

  <Contents/>
 
    </>
  );
}

export default Selectedcourses
//<Video/>*/





import React from 'react'
import Contents from './Contents';

import "./CourseNavigation.css";
import "./Selectedcourses.css";
import Nav2 from './Nav2';

const Selectedcourses = () => {
  return (
    <>
      <div className="sc-container">
        <div className="sc-nav">
          <Nav2/>
        </div>
        <div className="sc-heading1">
          <h4>The Complete Financial Analyst Course 2023</h4>
        </div>
        <Contents />
      </div>
      <br />
      <hr />
      <br />

    </>
  );
};
export default Selectedcourses;
