import React, { useState, useEffect } from 'react';
import Header from "./Header.js";
import { useNavigate } from "react-router-dom";

export default function ListPage() {
    const [bookIds, setBookIds] = useState("");
    const [bookList, setBookList] = useState([]);
    const username = sessionStorage.getItem('user');
    const navigate = useNavigate();

  
    function fetchBookIds() {
      fetch(`/get-wishlist?username=${username}`)
        .then(response => response.json())
        .then(data => setBookIds(data))
    };
  
    function fetchBooks() {
      const bookIdsList = bookIds.split(";")
      bookIdsList.shift()
      sessionStorage.setItem("wishlist", bookIds)
      const newBookList = bookIdsList.map(async bookId => {
      const response2 = await fetch(`/get-book?bookId=${bookId}`);
      const data2 = await response2.json();
          return (
              <img
                  title={data2?.["title"]}
                  src={data2?.["imageURL"]}
                  className="book"
                  onClick={() => navigate("/book/" + data2?.["bookId"])} />
          );
      });
      Promise.all(newBookList).then(setBookList);
    };
  
    useEffect(() => {
      fetchBookIds();
      fetchBooks();
    }, [bookIds]);
  
    return (
      <div className="widthsite">
        <div className="booksFrontpage">
        <h1 className='categoryFrontpage'>Ønskeliste</h1>
        <hr className="underlineFrontpage"></hr>

          <div className="book_grid_wishlist">
            {bookList}
          </div>
        </div>
      </div>
    );
  }
