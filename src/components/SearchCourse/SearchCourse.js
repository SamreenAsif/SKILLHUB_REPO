// // import React from "react";
// import { useLocation } from "react-router-dom";
// import SearchResult from "./SearchResults/SearchResult";
// // import courses from "../../data/coursesData";
// // import "./SearchCourse.css";
// import React, { useEffect, useState } from "react";

// function SearchCourse(props) {
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   // Retrieve keyword from location state
//   const location = useLocation();
//   const { state } = location;
//   const keyword = state ? state : "";
//   useEffect(() => {
//     // Function to fetch search results from the server
//     const fetchSearchResults = async () => {
//       try {
//         const response = await fetch(`/SearchResult?search=${encodeURIComponent(keyword)}`);
//         if (response.ok) {
//           const data = await response.json();
//           setFilteredCourses(data);
//         } else {
//           throw new Error("Request failed with status: " + response.status);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

    

//     // Fetch search results on component mount or keyword change
//     fetchSearchResults();
//   }, [keyword]);

//   return (
//     <div className="search-result-container">
//       {filteredCourses.map((course) => (
//         <SearchResult
//           key={course.id}
//           result={course}
//           handleAddToCart={props.handleAddToCart}
//           handleAddToWishList={props.handleAddToWishList}
//         />
//       ))}
//     </div>
//   );
// }

// export default SearchCourse;

// // import sampleImg from "../../../../images/studentsViewing/courses/course1.png";

// function SearchCourse(props) {
//   // will search given course name from already present courses that will be stored in some file or
//   // array
//   const location = useLocation();
//   const { state } = location;
//   const keyword = state ? state : "";
//   const filteredCourses = courses.filter((course) =>
//     course.title.toLowerCase().includes(keyword.toLowerCase())
//   );
//   return (
//     <div className="search-result-container">
//       {filteredCourses.map((course) => (
//         <SearchResult
//           key={course.id}
//           result={course}
//           handleAddToCart={props.handleAddToCart}
//           handleAddToWishList={props.handleAddToWishList}
//         />
//       ))}
//     </div>
//   );
// }

// export default SearchCourse;


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResult from "./SearchResults/SearchResult";
import "./SearchCourse.css";
function SearchCourse(props) {
  const [filteredCourses, setFilteredCourses] = useState([]);

  const location = useLocation();
  const { state } = location;
  const keyword = state ? state : "";

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`/SearchResult?search=${encodeURIComponent(keyword)}`);
        if (response.ok) {
          const data = await response.json();
          setFilteredCourses(data);
        } else {
          throw new Error("Request failed with status: " + response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Clear previous search results
    setFilteredCourses([]);

    // Fetch search results only if the keyword is not empty
    if (keyword) {
      fetchSearchResults();
    }
  }, [keyword]);

  return (
    <div className="search-result-container">
      {filteredCourses.map((course) => (
        <SearchResult
          key={course._id}
          result={course}
          handleAddToCart={props.handleAddToCart}
          handleAddToWishList={props.handleAddToWishList}
        />
      ))}
    </div>
  );
}

export default SearchCourse;
