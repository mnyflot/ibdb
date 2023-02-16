import React, { Component } from "react";
import SearchBar from "./SearchBar";
import LogInButton from "./LogInButton";
import { useParams } from "react-router-dom";


export class SearchResultsPage extends Component {
    constructor(props) {
        super(props);
        let params = useParams();
        console.log(params);
        this.search = params.search;
    }

    render() {
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
                    <p>Search results for "{this.search}"</p>
                </div>
            </div>
          </div>
        );
        
    }    
        
}
export default SearchResultsPage;