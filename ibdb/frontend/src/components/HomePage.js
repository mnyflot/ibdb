import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
import LogInPage from "./LogInPage";
import UserPage from "./UserPage";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <h1>Jalla</h1>
                </Route>
                <Route path='/user' component={UserPage} />
                <Route path='/log-in' component={LogInPage} />
            </Switch>
        </Router>);
    }
}