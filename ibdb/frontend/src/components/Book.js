import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
    // Fetch book data based on the bookId parameter
    fetch(`/get-book?bookId=${bookId}`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error(error));
  }, [bookId]);

  return (
    <div>
        <Header/>
        <div className='bookMain'>
            <div className='bookImage'>
                <img src="https://dj4fsg3e1je59.cloudfront.net/9788202593209/img/0"/>
            </div>
            <div className='bookInformation'>
                <h1>{book.title} </h1>
                <p id='authorAndYear'>Erlend Loe {book.author} &#8226; 2018 {book.year} &#8226; Roman {book.genre}</p>
                <p> &#9733; &#9733;  &#9733;  &#9733; &#9734; <b>4.3</b>/5 </p>
                <hr></hr>
                <p> <b>OM BOKEN</b></p>
                <p> {book.description} JEG GIR STORT SETT FAEN I ROM, MEN JEG HAR PROBLEMER MED TID. Den 25 år gamle hovedpersonen har to venner. En god og en dårlig. Og så har han en bror som ikke er så altfor sympatisk. 
                    Når denne broren slår ham i krokket, raser tilværelsen hans sammen. Han mister sin begeistring og troen på at alt vil gå bra til slutt og havner i en eksistensiell krise. Han bryter 
                    opp fra sitt vanlige liv, dropper studiene og låner brorens leilighet. Der tilbringer han tiden dels med å leke dels med å reflektere over ting han liker og misliker. Det hele er 
                    skildret med en særlig blanding av ironi og naivitet der en lengsel etter den tapte barndom ligger under.</p>
            </div>
        </div>
    </div>
  );
}



