import React from "react";
import SearchBar from "./SearchBar";
import LogInButton from "./LogInButton";
//import { useParams } from "react-router-dom";

const SearchResultsPage = () => {
    //const { searchParams } = useParams();
    //let queryText = searchParams.searchPhrase;
    //console.log(queryText);

    return (
        <div>
            <div className="headerSite">
                <h1>IBDb</h1>
                <div className="searchBarDiv">
                    <SearchBar/>
                </div>
                <div className="logInButtonDiv">
                    <LogInButton/>
                </div> 
            </div>
            <div className="searchResultsDiv">
                <div>
                    <p>Search results for ""</p>
                </div>
            </div>
        </div>
        );
};

export default SearchResultsPage;