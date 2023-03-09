import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";

export default function SearchResultsPage() {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();
    let location = useLocation();
    
    useEffect(() => {
        let query = new URLSearchParams(location.search).get("quer") || "";
        setSearchQuery(query);
    }, [location.search]);
    

    useEffect(() => {
        fetch('/get_all_books')
          .then(respose => respose.json())
          .then(books => setBooks(books))
          .catch(error => console.error(error));

    }, []);

    const filteredBooks = books.filter((book) =>
        `${book.title}`.toLowerCase().includes(searchQuery.toString().toLowerCase()) ||
        `${book.author}`.toLowerCase().includes(searchQuery.toString().toLowerCase())
    );

    filteredBooks.forEach(book => {
        console.log(book)
        console.log(`/book/${book.bookId}`)
    });

    return (
        <div >
            <Header/>
            {filteredBooks.length === 0 ? (
                <div className="search-results-page"> 
                    <div className="search-results">
                        <p>No search results for "{searchQuery}".</p>
                    </div>
                </div>
            ) : (
                <div className="searchPage">
                    <div className="search-results">
                        <p>
                            {searchQuery !== '' ? `Showing search results for "${searchQuery}"` : 'Showing all books'}
                        </p>
                    </div>
                    <div className="book-search-container">
                        {filteredBooks.map((book) => (
                            <div id={book.id} className="search-book">
                                <img 
                                    className="bookImage"
                                    src={book.imageURL}
                                    alt={book.title}
                                    onClick={() => navigate(`/book/${book.bookId}`)}
                                />
                                <h2>{book.title}</h2>
                                <p>{book.author}</p>
                                
                            </div>
                    ))}
                    </div>
                </div>
                )}
        </div>
    );
}