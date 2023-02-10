import React, { Component } from 'react';

class LogInButton extends Component() {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='loginButton'>
                <a href="/log-in">
                    <button>Log In</button>
                </a>
            </div>
        );
    }
}

export default LogInButton;