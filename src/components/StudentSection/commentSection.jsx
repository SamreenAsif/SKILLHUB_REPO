import React, { useState } from "react";
import "./commentSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function Comments() {
  const [comments, setComments] = useState([
    {
      author: "Robert Bye",
      date: "DD-MM-YYYY",
      rating: 3,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      image: "https://i.imgur.com/nUNhspp.jpg",
    },
    {
      author: "Liana Johns",
      date: "DD-MM-YYYY",
      rating: 4,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      image: "https://i.imgur.com/nUNhspp.jpg",
    },
    {
      author: "Albert Watt",
      date: "DD-MM-YYYY",
      rating: 5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      image: "https://i.imgur.com/nUNhspp.jpg",
    },
    // more comment objects...
  ]);
  const [newComment, setNewComment] = useState({
    author: "",
    date: "",
    rating: 0,
    text: "",
    image: "",
  });

  const handleChange = (event) => {
    setNewComment({
      ...newComment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment({
      author: "",
      date: "",
      rating: 0,
      text: "",
      image: "",
    });
  };

  return (
    <CommentSection
      comments={comments}
      newComment={newComment}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      solidStar={solidStar}
      regularStar={regularStar}
    />
  );
}

const CommentSection = ({
  comments,
  newComment,
  handleChange,
  handleSubmit,
  solidStar,
  regularStar,
}) => {
  return (
    <div className="comment-section">
      <div className="comments-container">
        <div className="review">
          <h2 className="R-title">Comments</h2>
          <br></br>
          <br></br> <hr></hr>
          {comments.map((comment, index) => (
            <div key={index} className="media media-review">
              <div className="media-user">
                <img src={comment.image} alt="" />
              </div>
              <div className="media-body">
                <div className="M-flex">
                  <h2 className="title">
                    <span>{comment.author}</span>
                    {comment.date}
                  </h2>
                  <div className="rating-row">
                    <ul>
                      {Array.from({ length: comment.rating }, (_, i) => (
                        <li key={i} className="">
                          <FontAwesomeIcon icon={solidStar} />
                        </li>
                      ))}
                      {Array.from({ length: 5 - comment.rating }, (_, i) => (
                        <li key={i} className="">
                          <FontAwesomeIcon icon={regularStar} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="description">{comment.text}</div>
              </div>
            </div>
          ))}
        </div>
     
      </div>
    </div>
  );
};
