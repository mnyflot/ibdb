
import React, { Component } from 'react';

class MySiteButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href="http://127.0.0.1:8000/user/Linn">
                    <button className="buttonDefault" type="button">Min side</button>
                </a>
            </div>
        );
    }
}

export default MySiteButton;