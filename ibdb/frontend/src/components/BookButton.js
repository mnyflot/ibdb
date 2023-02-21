import React from "react";
import { Component } from "react";

export class BookButton extends Component {
    constructor(props) {
        super(props);
        this.onBookClick = this.onBookClick.bind(this)
    };

    onBookClick() {
        alert("Hei");
    }

    render() {
        return (
            <div className="new_releases"> 
                <img title= "Why we sleep" onClick={this.onBookClick}/>
                <img title= "Naiv Super" onClick={this.onBookClick}/>
            </div>
        )
    }
}

export default BookButton;