import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchResultsPage() {
    const navigate = useNavigate();
    let { searchPhrase } = useParams();
    searchPhrase = searchPhrase.split("+");
    searchPhrase = searchPhrase.join(" ");
    // searchPhrase = searchPhrase.toLowerCase();


    useEffect(() => {
        // Fetch book data based on the searchPhrase parameter
        fetch(`/get-book?title=${searchPhrase}`)
          .then(response => response.json())
          .then(data => navigate(`/book/${data.bookId}`))
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