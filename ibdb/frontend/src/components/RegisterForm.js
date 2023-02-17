import React, { Component, useState } from "react";
import {Link, Routes, Route, useNavigate, redirect} from 'react-router-dom';

export class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {newUsername: "", newpassword: "", passwordConfirmation: ""};

        this.handleRegisterChange = this.handleRegisterChange.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }

    handleRegisterChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({[name]: value});
      }

    handleRegisterSubmit(event) {
        event.preventDefault();
        alert('Succsess! ' + this.state.newpassword + '=' +this.state.passwordConfirmation);
        window.location.href="/user"

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
                                className = "loginInputField" type ="text" name="newUsername"  value={this.state.newUsername}  onChange={this.handleRegisterChange} placeholder="Email address*" required>
                            </input>
                        </div>
                        <div>
                            <input
                                className = "loginInputField" type="password" name="newpassword" value={this.state.newpassword} onChange={this.handleRegisterChange} placeholder="Password*" required>
                            </input>
                        </div>
                        <div>    
                            <input
                                className = "loginInputField" type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleRegisterChange} placeholder="Confirm Password*" required>
                            </input>
                        </div>
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