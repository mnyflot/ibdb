import React, { Component } from "react";
import Header from "./Header";

export class UserPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>                    
                    <Header/>
                </div>
                <div className="headline">
                    <h1>Hi user! </h1>
                </div>
             </div>
        ) 
    }
}

export default UserPage;

