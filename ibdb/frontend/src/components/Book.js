import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

export default function Book() {
  const { bookId } = useParams();
  const [book, setBook] = useState({
    title: '',
    genre: '',
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
      <h1>{book.title}</h1>
      <p>Sjanger: {book.genre}</p>
    </div>
  );
}



