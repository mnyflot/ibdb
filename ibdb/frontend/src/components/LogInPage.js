import React, { Component } from "react";
import LogInForm from "./LogInForm.js";
import RegisterForm from "./RegisterForm.js";
import Header from "./Header.js";
 
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";

export  class LogInPage extends Component {
    constructor(props) {
        super(props);
         this.state= {registerClicked: false};
         this.handleRegisterClickTrue = this.handleRegisterClickTrue.bind(this);
         this.handleRegisterClickFalse = this.handleRegisterClickFalse.bind(this);


    }

     handleRegisterClickTrue() {
        this.setState({registerClicked: true});
    }  
    handleRegisterClickFalse(){
        this.setState({registerClicked: false});
    }

    render() {
        return (
            <div>
                <div>                    
                    <Header/>
                </div>
                <div className="form">
                    <div >
                         {! this.state.registerClicked ?
                        <LogInForm /> :
                        null}
                        {this.state.registerClicked ?
                        <RegisterForm /> :
                        null} 
                    </div> 
                <div> 
                <hr></hr>
                {!this.state.registerClicked ?
                    <button id="registerNewUserButton"  onClick={this.handleRegisterClickTrue} > <p>If you dont have an account, please register here</p></button>  
                    : null}
                {this.state.registerClicked ?
                    <p>Already an user? 
                    <button id="registerNewUserButton"  onClick={this.handleRegisterClickFalse} ><p>LOGIN</p></button>  </p> 
                    : null}
                </div>
                </div>
            </div>
        );
    }
}
export default LogInPage;

