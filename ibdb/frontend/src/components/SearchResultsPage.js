import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

const SearchResultsPage = () => {
    const { searchPhrase } = useParams();
    console.log(searchPhrase);

    return (
        <div>
            <Header/>
            <div>
                <div>
                    <p>Search results for "{searchPhrase}"</p>
                </div>
            </div>
        </div>
        );
};

export default SearchResultsPage;