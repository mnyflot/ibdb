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
            <div >
                <div>
                    <h3>Register new user</h3>
                </div>
                <div >
                    <form onSubmit={this.handleRegisterSubmit} >
                        <div className="input-container">
                            <p>Username or email</p>
                            <input
                                type ="text" name="newUsername"  value={this.state.newUsername}  onChange={this.handleRegisterChange} placeholder="username" required>
                            </input>
                        </div>
                        <div>
                            <p>Password</p>
                            <input
                                type="password" name="newpassword" value={this.state.newpassword} onChange={this.handleRegisterChange} placeholder="******" required>
                            </input>
                            <p>Confirm password</p>
                            <input
                                type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleRegisterChange} placeholder="******" required>
                            </input>
                        </div>
                        <div> 
                            <button type ="submit" className="RegisterUserButton" id="RegisterNewUserButton"> Register</button>
                        </div>            
                    </form>
                </div>
            </div>  
        );
    }
}

export default RegisterForm;