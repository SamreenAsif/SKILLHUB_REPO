// PopularCourses.js

import React from "react";
import "./PopularCourses.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import courses from "../../data/coursesData";
import SearchResult from "../SearchCourse/SearchResults/SearchResult";

const PopularCourses = (props) => {
  const popularCourses = courses.sort((a, b) => b.rating - a.rating).slice(0, 6);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <div className="slick-prev"> </div>,
    nextArrow: <div className="slick-next">  </div>,
    initialSlide: 0 
  };

  return (
    <div className="slider-container">
      <div id="my-slider">
      <h1 id="popular-heading">Popular courses</h1>
        <Slider {...settings}>
          {popularCourses.map((course) => (
            <SearchResult
              key={course.id}
              result={course}
              handleAddToCart={props.handleAddToCart}
              handleAddToWishList={props.handleAddToWishList}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularCourses;
