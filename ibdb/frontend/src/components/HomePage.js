import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link, Redirect, } from "react-router-dom";
import LogInPage from "./LogInPage";
import UserPage from "./UserPage";
//import LogInButton from "./LogInButton";
//import LogInButton from "./LogInButton.js";


export class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <div className="headerSite">
                <p>IMDBd</p>
                <div className="logInButtonDiv">
                    <a href="/log-in" >
                    <button className="logInButton" id="logInButton">Log In</button>
                </a>
                </div> 
            </div>
            <div>
              <BrowserRouter>
                <Routes>
                  <Route exact path="/" element={''}></Route>
                  <Route path="/user" element={<UserPage />} />
                  <Route path="/log-in" element={<LogInPage />} />
                 </Routes>
              </BrowserRouter>
            </div>
            
            <div>
                           
            </div>
          </div>
        );
        
    }    
        
}
export default HomePage;
