import React from "react";
import Header from "../components/Header/Header";
import TopCategories from "../components/TopCategories/TopCategories";
import Advertisement from "../components/Advertisement/Advertisement";
import PopularCourses from "../components/PopularCourses/PopularCourses";
const HeaderContainer = (props) => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <PopularCourses
        handleAddToCart={props.handleAddToCart}
        handleAddToWishList={props.handleAddToWishList}
      />
      <TopCategories />
      <Advertisement />
    </div>
  );
};

export default HeaderContainer;
