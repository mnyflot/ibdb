import React, { Component } from "react";
import LogInButton from "./LogInButton";



export class Header extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <div className="header">
                <h1 id="nameInHeader">IBD</h1>
                <div className="logInButtonDiv">
                    <LogInButton/>
                </div> 
            </div>
        );
    }

}

export default Header;