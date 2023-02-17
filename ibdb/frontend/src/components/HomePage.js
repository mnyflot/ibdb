import React, { Component } from "react";
import Header from "./Header.js";


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
            <div>
            </div>
          </div>
        );
        
    }    
        
}
export default HomePage;
