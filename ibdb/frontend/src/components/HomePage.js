import React, { Component } from "react";
import BookButton from "./BookButton";
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
                <BookButton/>
          </div>
        );  
        
    } 

        
}
export default HomePage;
