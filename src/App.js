import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./container/HeaderContainer";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import CartPage from "./components/YourCart/CartPage";
import Checkout from "./components/Checkout/Checkout";
import SearchCourse from "./components/SearchCourse/SearchCourse";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Account from "./components/Account/accountSettings";
import FavoritesTab from "./components/Favorites/FavoritesTab";
import Coursehome from "./components/StudentSection/Coursehome";
import Selectedcourses from "./components/StudentSection/Selectedcourses";
import { Overview } from "./components/StudentSection/Overview";
import Comments from "./components/StudentSection/commentSection";
import Create1 from "./components/StudentSection/Create1";
import Create2 from "./components/StudentSection/Create2";
import Create3 from "./components/StudentSection/Create3";
import Create4 from "./components/StudentSection/Create4";
import Courses from "./components/StudentSection/Courses";
import Aboutcourse from "./components/StudentSection/Aboutcourse";
// const searchRouter = require("./routes/search");
// app.use("/search", searchRouter);


export const CartItemContext = createContext();

function App() {
  const [coursesInCart, setCourseInCart] = useState([]);
  const [coursesInWishList, setWishList] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [ratings, setRatings] = useState([
    { courseId: "1", ratingValue: 4 },
    { courseId: "2", ratingValue: 5 },
    { courseId: "1", ratingValue: 3 },
    { courseId: "3", ratingValue: 2 },
  ]);
  const updateLogInStatus = (status) => {
    setLoggedIn(status);
  };
  const handleAddToCart = (course) => {
    const isAlreadyInCart = coursesInCart.find((c) => c.id === course.id);

    if (!isAlreadyInCart) {
      setCourseInCart([...coursesInCart, course]);
    }
  };

  const handleAddToWishList = (course) => {
    const isInWishList = coursesInWishList.find((c) => c.id === course.id);

    if (!isInWishList) {
      setWishList([...coursesInWishList, course]);
    }
  };

  const getAverageRating = (courseId) => {
    const courseRatings = ratings.filter(
      (rating) => rating.courseId === courseId
    );
    const ratingSum = courseRatings.reduce(
      (sum, rating) => sum + rating.ratingValue,
      0
    );
    return courseRatings.length > 0 ? ratingSum / courseRatings.length : 0;
  };
  return (
    <>
      <CartItemContext.Provider value={{ coursesInCart, setCourseInCart }}>
        <Navigation isLoggedIn={isLoggedIn} />

        <Routes>
          <Route
            index
            element={
              <HeaderContainer
                handleAddToCart={handleAddToCart}
                handleAddToWishList={handleAddToWishList}
              />
            }
          />
          <Route
            path="/login"
            element={<Login updateLogInStatus={updateLogInStatus} />}
          />

          <Route path="/Profile" element={<Profile />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Learning" element={<Coursehome />} />

          <Route
            path="/Learning/CourseInfoPage"
            element={<Selectedcourses />}
          />
          <Route
            path="/Learning/CourseInfoPage/overview"
            element={<Overview />}
          />
          <Route path="/Learning/CourseInfoPage/QA" element={<Comments />} />

          <Route
            path="/yourcart"
            element={<CartPage cartContent={coursesInCart} />}
          />

          <Route
            path="/wishList"
            element={
              <FavoritesTab
                wishListContent={coursesInWishList}
                handleAddToCart={handleAddToCart}
              />
            }
          />
          <Route path="/Learning/Learning" element={<Coursehome />} />
          <Route
            path="/Learning/wishList"
            element={
              <FavoritesTab
                wishListContent={coursesInWishList}
                handleAddToCart={handleAddToCart}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/teaching" element={<Courses />} />

          <Route
            path="/SearchResult"
            element={
              <SearchCourse
                handleAddToCart={handleAddToCart}
                handleAddToWishList={handleAddToWishList}
                getAverageRating={getAverageRating}
              />
            }
          />

        </Routes>
   
      <Routes>
      <Route path="/teaching/Create1" element={<Create1/>}>
        </Route>

        <Route path="/teaching/Create1/Create2" element={<Create2/>}>
        </Route>
        <Route path="/teaching/Create1/Create2/Create3" element={<Create3/>}>
        </Route>
        <Route path="/teaching/Create1/Create2/Create3/Create4" element={<Create4/>}>
        </Route>
        <Route path="/teaching/Create1/Create2/Create3/Create4/Aboutcourse" element={<Aboutcourse/>}>
        </Route>
      </Routes>
        <Footer />
      </CartItemContext.Provider>
    </>
  );
}

export default App;
