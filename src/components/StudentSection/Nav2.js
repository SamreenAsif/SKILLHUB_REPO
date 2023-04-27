import React from "react";
import { useNavigate } from "react-router-dom";
import "./CourseNavigation.css";

function Nav2() {
  const naviagte = useNavigate();
  const gotoAnnouncements = () => {
    naviagte("./Announcements");
  };
  const gotoOverview = () => {
    naviagte("./overview");
  };
  const gotoQA = () => {
    naviagte("./QA");
  };
  const gotoNotes = () => {
    naviagte("./notes");
  };
  return (
    <nav>
      <ul className="lists">
        <li className="sc-lists" onClick={gotoOverview}>
          Overview
        </li>
        <li className="sc-lists" onClick={gotoQA}>
          Q&A
        </li>
        <li className="sc-lists" onClick={gotoAnnouncements}>
          Announcements
        </li>
        <li className="sc-lists" onClick={gotoNotes}>
          Resources
        </li>
      </ul>
    </nav>
  );
}

export default Nav2;
