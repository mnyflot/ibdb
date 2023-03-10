import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function BookButton() {
    
    const navigate = useNavigate();
    const bookList = []
    
    const[books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books')
        .then(response => response.json())
        .then(data => setBooks(data))
    }, []);

    for (const [i, book] of books.entries()) {
        bookList.push(<img 
            title={books?.[i]?.["title"]}
            src={books?.[i]?.["imageURL"]}
            className="book"
            onClick={()=> navigate("/book/"+books?.[i]?.["bookId"])}/>)
      }
    return (
        
        <div className="book_grid"> 
            {bookList}
        </div>
    )
}

export default BookButton;