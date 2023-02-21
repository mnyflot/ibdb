import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

const SearchResultsPage = () => {
    let { searchPhrase } = useParams();
    console.log(searchPhrase);

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
};

export default SearchResultsPage;