import React, { Component, useState } from "react";
import {Link, Routes, Route, useNavigate, redirect} from 'react-router-dom';


export class LogInForm extends Component {
    constructor(props) {
        super(props);
        this.state= {username: "", password: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
      
    handleSubmit(event) {
        event.preventDefault();
        alert('Nice login! ' + this.state.password + '=' +this.state.username);
        window.location.href="/user"
    }
        
    render() {
        return (
            <div >
                <div>
                    <h3>Please login here!</h3>
                </div>
                <div >
                    <form onSubmit={this.handleSubmit} >
                        <div className="input-container">
                            <p>Username</p>
                            <input
                                type ="text" name="username"  value={this.state.username}  onChange={this.handleChange} placeholder="username" required>
                            </input>
                        </div>
                        <div>
                            <p>Password</p>
                            <input
                                type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="******" required>
                            </input>
                        </div>
                        <div> 
                            <button className="logInFormButton" id="formButton" type="submit">Log in</button>
                       </div>
                    </form>
                </div>
            </div>  
        );
    }
}


export default LogInForm;