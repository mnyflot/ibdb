import React, { Component } from 'react';

class LogInButton extends Component {
    constructor(props) {
        super(props);
        if (this.props.loggedIn == 'null') {
            this.state = {loggedIn: false, buttonText: 'Logg inn'};
        }
        else {
            this.state = {loggedIn: true, buttonText: 'Logg ut'};
        }
    }

    setLoggedIn() {
        if (this.state.loggedIn == true) {
            localStorage.setItem('user', null)
            this.state.loggedIn = false;
            this.state.buttonText = 'Logg inn';
            window.location.href="/";
        }
        else {
            window.location.href="/log-in";
        }
    }

    render() {
        return (
            <div>
                <button className="buttonDefault" type="button" onClick={() => this.setLoggedIn()}>{this.state.buttonText}</button>
            </div>
        );
    }
}

export default LogInButton;