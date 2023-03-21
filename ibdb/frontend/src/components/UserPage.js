import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "./Header.js";
import Review from './Review.js';

export default function User() {
  const { username } = useParams();
  const [reviews, setReviews] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
      fetch('/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
  }, []);

  useEffect(() => {
      fetch('/books')
      .then(response => response.json())
      .then(data => setBooks(data))
  }, []);

  let reviewList = reviews
  .filter(review => review.username === username);

  let bookList = books
  .filter(book => {
    for (const [i, review] of reviewList.entries()) {
      if (book.bookId == review.bookId) {
        return true;
      }
    };
    return false;
  });

  console.log(reviewList);
  console.log(bookList);

  //<b>{bookList[reviewList.indexOf(review)].title}</b>
  reviewList = reviewList
  .map(review => <Review review={review} />);

  useEffect(() => {
    // Fetch user data based on the username parameter
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      // setUser(foundUser);
    }
  }, []);

    return (
        <div>
            <div>                    
                <Header/>
            </div>
            <div className="headline">
                <h1>Hi {username}! </h1>
            </div>
            <div className='reviewDiv'>
            </div>
            <p>{reviewList[0]}</p>
            </div>
    ) 
}


