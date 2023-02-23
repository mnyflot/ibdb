import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchResultsPage() {
    const navigate = useNavigate();
    let { searchPhrase } = useParams();
    searchPhrase = searchPhrase.split("+");
    searchPhrase = searchPhrase.join(" ");

    useEffect(() => {
        // Fetch book data based on the searchPhrase parameter
        fetch(`/search-title?title=${searchPhrase}`)
          .then(response => response.json())
          .then((data) => {
            (typeof data.bookId != "undefined") ? navigate(`/book/${data.bookId}`) : console.log("Book not found...")})
          .catch(error => console.error(error));
      }, [searchPhrase]);

    return (
        <div>
            <Header/>
            <div>
                <div>
                    <h2>Sorry, no search results for "{searchPhrase}"</h2>
                </div>
            </div>
        </div>
        );
}