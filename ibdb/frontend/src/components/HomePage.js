import React, { Component } from "react";
//import LogInButton from "./LogInButton";
//import LogInButton from "./LogInButton.js";
import Header from "./Header.js";
import LogInButton from "./LogInButton.js";


export class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <div>                    
                <Header/>
            </div>
            <div className="headerSite">
                <p>IDBd</p>
                <div className="logInButtonDiv">
                    <LogInButton/>
                </div>  
            </div>
            <div>
            </div>
          </div>
        );
        
    }    
        
}
export default HomePage;
