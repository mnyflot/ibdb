import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import LogInButton from "./LogInButton";
import SearchBar from "./SearchBar";



export function Header() {
    
    const navigate = useNavigate();

    return (
        <div className="header">
            <h1 id="nameInHeader" onClick={()=> navigate("/")}>IBDb</h1>
            <div className="searchBarDiv">
                <SearchBar/>
            </div>
            <div className="logInButtonDiv">
                <LogInButton/>
            </div> 
            
        </div>
    );

}

export default Header;