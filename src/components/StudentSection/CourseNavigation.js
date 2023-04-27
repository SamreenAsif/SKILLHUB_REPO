

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseNavigation.css';

function CourseNavigation() {
  const navigate = useNavigate();
  const gotoAllCourses = ()=>{
    navigate("./SearchCourses")
  }
  const gotoMyLearning = ()=>{
    navigate("./Learning")
  }
  const gotoWishList = ()=>{
    navigate("./wishList");
  }
  return (
    
    <nav>
      <ul className="cn-lists">
        <li className="cn-listItem" onClick={gotoAllCourses}>
          All courses
        </li>
        <li className="cn-listItem" onClick={gotoMyLearning}>
          My Lists
        </li>
        <li className="cn-listItem" onClick={gotoWishList}>
          WishList
        </li>
        <li className="cn-listItem">
          Archived
        </li>
      </ul>
    </nav>
  );
}

export default CourseNavigation;

