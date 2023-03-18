import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import LogInButton from "./LogInButton";
import SearchBar from "./SearchBar";
import MySiteButton from "./MySiteButton"



export function Header() {
    
    const navigate = useNavigate();
    //console.log(localStorage);


    return (
        <div className="header">
            <h1 className="nameInHeader" onClick={()=> navigate("/")}>IBDb</h1>
            <div className="searchBarDiv">
                <SearchBar/>
            </div>
            <div className="logInButtonDiv">
                
                {! localStorage.getItem('user') ?
                        <LogInButton/> : null
                        }
                { localStorage.getItem('user') ?
                      <MySiteButton></MySiteButton>
                    : null
                }
            </div> 
            
        </div>
    );

}

export default Header;