import React, { Component, useState } from "react";
import {Link, Routes, Route, useNavigate, redirect} from 'react-router-dom';


export class LogInForm extends Component {
    constructor(props) {
        super(props);
        this.state= {username: "", password: "", email: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
      
    handleSubmit(event) {
        event.preventDefault();
        alert('Nice login! ' + this.state.password + '=' +this.state.username);
        window.location.href="/user/"+this.state.username
    }
        
    render() {
        return (
            <div className = "loginForm">
                <div>
                    <h3 className="signInText">Sign in</h3>
                </div>
                <div >
                    <form onSubmit={this.handleSubmit} >
                        <div>
                            <input
                                className = "loginInputField" type ="text" name="email"  value={this.state.email}  onChange={this.handleChange} placeholder="Email adress*" required>
                            </input>
                        </div>
                        <div>
                            <input
                                className = "loginInputField" type ="text" name="username"  value={this.state.username}  onChange={this.handleChange} placeholder="Email adress*" required>
                            </input>
                        </div>
                        <div>
                            <input
                                className = "loginInputField" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password*" required>
                            </input>
                        </div>
                        <div> 
                            <button className="buttonDefault" id="formButton" type="submit">Log in</button>
                       </div>
                    </form>
                </div>
            </div>  
        );
    }
}


export default LogInForm;