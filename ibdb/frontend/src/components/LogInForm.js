import React, { Component } from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
//import "./LogInForm.css";

export class LogInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "", password : ""};
    }

    

    handleInput(event){
        event.preventDefault();
        const target = event.target;
        this.setState({
        [target.name]: target.value,
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const navigate = useNavigate();
        Route('/user');

    }

    render() {
        return (
            <div >
                <div >
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-container">
                            <p>Username</p>
                            <input
                                type ="text" name="username"  onChange={this.handleInput} required>
                            </input>
                        </div>
                        <div>
                            <p>Password</p>
                            <input
                                type="password" name="password" onChange={this.handleInput}  required>
                            </input>
                        </div>
                        <div>
                            <button className="logInFormButton" id="formButton" type="submit" >Log in</button>
                        </div>
                    </form>
                </div>
            </div>  
        );
    }
}

export default LogInForm;