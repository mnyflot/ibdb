import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";
import LogInPage from "./LogInPage";
import UserPage from "./UserPage";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<h1>Home page</h1>}></Route>
              <Route path="/user" element={<UserPage />} />
              <Route path="/log-in" element={<LogInPage />} />
            </Routes>
          </BrowserRouter>
        );
    }
}