import React, { Component } from "react";


export class LogInForm extends Component {
    constructor(props) {
        super(props);
        /* this.state = {
            username : "", password : ""}; */
    }

    handleInput(event){
        event.preventDefult();
        const target = event.target;
        this.setState({
        [target.name]: target.value,
        });
    }

    render() {
        return (
                <div className="form" id="outlineForm">
                    <form>
                        <div className="input-container">
                            <p>Username</p>
                            <input
                                type ="text" name="username" value="" /* onChange={this.handleInput} */ >
                            </input>
                        </div>
                        <div>
                            <p>Password</p>
                            <input
                            type="password" name="password" value="" /* onChange={this.handleInput}  required*/>
                            </input>
                        </div>
                        <div>
                            <button type="submit">Log in</button>
                        </div>
                    </form>
                </div>
        );
    }
}

export default LogInForm;