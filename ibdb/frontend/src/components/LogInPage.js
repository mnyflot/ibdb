import React, { Component } from "react";
import LogInForm from "./LogInForm.js";

/* import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";
 */
export  class LogInPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="headline">
                    <h1>Log In</h1>
                    {/* <a href="/new-user">
                     <button id="newUserButton">New User</button>
                    </a> */}
                </div>
                <div className="form">
                    <LogInForm></LogInForm>
                </div> 
                <div>
                    
                </div>
            </div>
        );
    }
}
export default LogInPage;

