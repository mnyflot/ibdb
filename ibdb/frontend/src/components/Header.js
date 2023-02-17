import React, { Component } from "react";
import LogInButton from "./LogInButton";
import SearchBar from "./SearchBar";



export class Header extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <div className="header">
                <h1 id="nameInHeader">IBDb</h1>
                <div className="searchBarDiv">
                    <SearchBar/>
                </div>
                <div className="logInButtonDiv">
                    <LogInButton/>
                </div> 
                
            </div>
        );
    }

}

export default Header;