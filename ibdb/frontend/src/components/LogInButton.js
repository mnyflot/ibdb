import React, { Component } from 'react';

class LogInButton extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <a href="/log-in">
                    <button classname="buttonDefault" type="button">Log in</button>
                </a>
            </div>
        );
    }
}

export default LogInButton;