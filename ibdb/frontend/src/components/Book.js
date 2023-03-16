import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AddToWishlist } from './AddToWishlist';
import Header from './Header';

export default function Book() {
  const { bookId } = useParams();
  const [book, setBook] = useState({
    title: '',
    genre: '',
    description: '',
    author: '',
    year: '',
    totalRatingScore: '',
    numberOfRatings: '', 
  });

  useEffect(() => {
    fetch(`/get-book?bookId=${bookId}`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error(error));
  }, [bookId]);

  let overalRating = 0;

  if (book.numberOfRatings === 0){
    overalRating = 0;
  }
  else{
    overalRating = Math.round(book.totalRatingScore/book.numberOfRatings * 10) / 10
  }
 
    var stars = [];
    for (let index = 0; index < 5; index++) {
        index < Math.round(overalRating) ? stars.push(<div>&#9733;</div>) : stars.push(<div>&#9734;</div>);
    }

  return (
    <div>
        <Header/>
        <div className='bookMain'>
            <div className='bookImage'>
                <img className='bookCover' src={book.imageURL}/>
            </div>
            <div className='bookInformation'>
                <h1>{book.title} </h1>
                <p id='authorAndYear'>{book.author} &#8226; {book.year} &#8226; {book.genre}</p>
                <p> 
                <div className='stars'>
                    {stars}
                </div>
                 <b>{overalRating}</b>/5 </p>
                <hr></hr>
                <p> <b>OM BOKEN</b></p>
                <p> {book.description}</p>
                <AddToWishlist />
            </div>
        </div>
    </div>
  );
}



