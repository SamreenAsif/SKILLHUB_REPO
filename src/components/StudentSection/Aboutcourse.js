import React from "react";
import './Aboutcourse.css';
import Example1 from "./Example1";

const Aboutcourse =()=>
{
    return(
      <div className="Aboutpage">
        <div className="Header_course">
            <button>Save</button>
         &nbsp;&nbsp;   &nbsp;&nbsp;   <img id="about-img" className="settings"src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIyHfYyMTOGHNuHhUtPDwR3j3ccTX50I1TVBOWds36&s" height="40px"  width="40px"></img>
        </div>
      <div className="about-left"  >
        <br></br>
        <br></br>
        <br></br>
        <div className="courseheading"><h4 >Intended Learners</h4></div>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <span className="courseline">The following descriptions will be publicly visible on your Course Landing Page and will have a direct impact on your course performance.</span>
        <br></br>
        <br></br>
         <h4 className="learn">What will students learn in your course?</h4>
         <br></br>
        <br></br>
        <Example1/>
       
        <br></br>
        <br></br>
        <Example1/>
       
        <br></br>
        <br></br>
        <Example1/>
       
        <br></br>
        <br></br>
        <Example1/>
        <br></br>
        <br></br>
        <h4 className="learn">  What are the requirements or prerequisites for taking your course?</h4>
        <br></br>
        <span className="courseline"> List the required skills, experience, tools or equipment learners should have prior to taking your course.</span>
       <br></br>
       <br></br>
       <br></br>
       <Example1/>
       <br></br>
       <br></br>
       <br></br>
       <h4 className="learn">   Who is this course for? </h4>
       <br></br>
       <span className="courseline"> Write a clear description of the intended learners for your course who will find your course content valuable.</span>
       <br></br>
       <br></br>
       <Example1/>
       <br></br>
       <br></br>
       <br></br>

      <a href=""> <div className="Help">
        <img id="about-img" src  ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1v35rnx0HDfTUh_GzlCSaxhJRpevVgb1RCg&usqp=CAU" width={30} height="30"></img>
       &nbsp;&nbsp; Help</div></a>




     



      </div>

      









      </div>

    )
}
export default Aboutcourse;