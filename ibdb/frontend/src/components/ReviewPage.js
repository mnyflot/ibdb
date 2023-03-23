import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header.js";
import ReviewForm from "./ReviewForm.js";



export default function ReviewPage() {
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

    return (
        <div>
        <div>                    
            <Header/>
        </div>
        <div>
        </div>
        <div className='bookMain'>
            <div className='bookImage'>
                <img className='bookCover' src={book.imageURL}/>
            </div>
            <div className='bookInformation'>
                <h1>{book.title} </h1>
                <p id='authorAndYear'>{book.author} &#8226; {book.year} &#8226; {book.genre}</p>
                <hr></hr>
                <ReviewForm/>
            </div>
        </div>
            
        </div>
    );  


}