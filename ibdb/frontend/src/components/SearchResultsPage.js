import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

export default function SearchResultsPage() {
    let { searchPhrase } = useParams();
    searchPhrase = searchPhrase.split("+");
    searchPhrase = searchPhrase.join(" ");
    searchPhrase = searchPhrase.toLowerCase();

    useEffect(() => {
        // Fetch book data based on the bookId parameter
        fetch(`/get-book?title=${searchPhrase}`)
          .then(response => response.json())
          .then(data => setBook(data))
          .catch(error => console.error(error));
      }, [searchPhrase]);

    return (
        <div>
            <Header/>
            <div>
                <div>
                    <h2>Search results for "{searchPhrase}"</h2>
                </div>
            </div>
        </div>
        );
}