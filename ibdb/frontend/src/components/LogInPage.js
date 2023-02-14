import React, { Component } from "react";
import LogInForm from "./LogInForm.js";
import RegisterForm from "./RegisterForm.js";
 
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";

export  class LogInPage extends Component {
    constructor(props) {
        super(props);
         this.state= {registerClicked: false};
         this.handleRegisterClick = this.handleRegisterClick.bind(this);

    }

     handleRegisterClick() {
        this.setState({registerClicked: true});
    }  

    render() {
        return (
            
            <div>
                <div className="headline">
                    <h1>Log In</h1>
                </div>
                
                    <div className="form">
                         {! this.state.registerClicked ?
                        <LogInForm /> :
                        null}
                        {this.state.registerClicked ?
                        <RegisterForm /> :
                        null} 
                    </div> 
                <div> 
                     <p>If you dont have an account, please  
                        <button id="registerButton"  onClick={this.handleRegisterClick} >Register here</button>
                    </p> 
                    
                </div>
                <div className="formR">
                </div>
            </div>
        );
    }
}
export default LogInPage;

