import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Coursecard.css";
import courses from "../../data/coursesData";
import StarRating from "../Ratings";
const Coursecard = () => {
    
    const navigate = useNavigate();
    const openPage = ()=>{
        navigate("./CourseInfoPage");
    }
  return (
    <section className="coursecard-container" onClick={openPage}>
      {courses.map((val, index) => {
        return (
          <>
            <div className="grid2">
              <div className="items">
                <a href="">
                  <div className="content-img">
                    <img src={val.imgUrl} alt="" />
                  </div>
                </a>

                <div className="text">
                  <h1 id="title-head">{val.title}</h1>
                  <br></br>
                  <div class="det">
                    <h5 id="cc-h5">{val.instructor}</h5>
                    <h5 id="cc-h5" class="h">
                      {val.duration} lectures
                    </h5>
                    <h4 id="cc-h4">${val.price}</h4>
                  </div>

                  <p id="cc-rate"><StarRating value={val.rating}/></p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};
export default Coursecard;
