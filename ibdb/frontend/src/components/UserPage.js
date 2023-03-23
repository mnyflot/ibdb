import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminPage from './AdminPage.js';
import Header from "./Header.js";
import Review from './Review.js';
import Wishlist from "./Wishlist.js"

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

  console.log("Reviews:")
  console.log(reviewList);
  console.log("Books reviewed:")
  console.log(bookList);

  reviewList = reviewList
  .map(review => <Review review={review} />);

    function handleLogout(event){
        event.preventDefault();
        const userExists = sessionStorage.getItem('user');
        console.log(userExists)
        if (userExists){
            sessionStorage.clear();
        }
        window.location.href="../"
    }
    
    let isAdmin = false;

    if (sessionStorage.getItem("admin") !== null){
        isAdmin = true;
    }

    console.log(isAdmin)

    return (
        <div>
            <div>                    
                <Header/>
            </div>
            <div className='logoutButton'>
                <button className='buttonDefault' onClick={handleLogout}>Logg ut</button>
            </div>
            <div className="headline">
                <h1>Hei, {username}! </h1>
                <p>Her kan du se dine lagrede bøker, og informasjon om kontoen din.</p>
            </div>

            <div className='myInformationBox'>
                <b>Min informasjon</b>
                <p>Brukernavn: {sessionStorage.getItem("user")}</p>
                <p>Epost: {sessionStorage.getItem("email")}</p>
            </div>

            <div>
                <Wishlist />
            </div>
            <div>  
                <h1 className='categoryFrontpage'>Anmeldelser</h1>
                <hr className="underlineFrontpage"></hr>
                <div className='reviewDiv'>
                {reviewList.map((review) => {
                    let bookTitle = "";
                    for (let i = 0; i < bookList.length; i++) {
                        if (bookList[i].bookId == review.props.review.bookId) {
                            bookTitle = bookList[i].title;
                            break;
                        }
                    }
                    return(
                        <div>
                            <p><b>{bookTitle} :</b> {review}</p>
                            <p></p>
                        </div>
                    )
                })}
            </div>
            <div>
                {(isAdmin) ? <AdminPage></AdminPage> : null }        
            </div>

            </div>
            </div>
    ) 
}


