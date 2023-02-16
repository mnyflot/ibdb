import React, { Component } from "react";
import SearchBar from "./SearchBar";
import LogInButton from "./LogInButton";


export class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <div className="headerSite">
                <p>IMDBd</p>
                <div className="searchBarDiv">
                    <SearchBar/>
                </div>
                <div className="logInButtonDiv">
                    <LogInButton/>
                </div> 
            </div>
          </div>
        );
        
    }    
        
}
export default HomePage;
