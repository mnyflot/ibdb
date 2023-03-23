import React, { Component } from 'react';

class LogInButton extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <a href="/log-in">
                    <button className="buttonDefault" >Log in</button>
                </a>
            </div>
        );
    }
}

export default LogInButton;