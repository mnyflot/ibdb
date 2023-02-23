import React, { Component, useState } from "react";

export class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUsername: "", 
            newpassword: ""/* , passwordConfirmation: "" */, 
            newEmail: ""
        };

        this.handleRegisterChange = this.handleRegisterChange.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }

    /* handleRegisterChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({[name]: value});
      } */
      handleRegisterChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleRegisterSubmit() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: this.state.newUsername,
                password: this.state.newpassword,
                email: this.state.newEmail,
            }),
        };
        fetch("/register", requestOptions)
            .then((response) => response.json())
            .then((data) => this.props.history.push("/user/" + data.username));
    }


    render() {
        return (
            <div className="loginForm">
                <div>
                    <h3 className="signInText">Register new user</h3>
                </div>
                <div >
                    <form onSubmit={this.handleRegisterSubmit} >
                        <div className="input-container">
                            <input
                                className = "loginInputField" type ="text" name="newEmail"  value={this.state.newEmail}  onChange={this.handleRegisterChange} placeholder="Email address" required>
                            </input>
                        </div>
                        <div className="input-container">
                            <input
                                className = "loginInputField" type ="text" name="newUsername"  value={this.state.newUsername}  onChange={this.handleRegisterChange} placeholder="Username" required>
                            </input>
                        </div>
                        <div>
                            <input
                                className = "loginInputField" type="password" name="newpassword" value={this.state.newpassword} onChange={this.handleRegisterChange} placeholder="Password" required>
                            </input>
                        </div>
                        {/* <div>    
                            <input
                                className = "loginInputField" type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleRegisterChange} placeholder="Confirm Password*" required>
                            </input>
                        </div> */}
                        <div> 
                            <button type ="submit" className="buttonDefault" id="formButton">Sign up</button>
                        </div>            
                    </form>
                </div>
            </div>  
        );
    }
}

export default RegisterForm;