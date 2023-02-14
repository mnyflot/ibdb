import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./components/HomePage";
import LogInPage from "./components/UserPage";
import UserPage from "./components/LogInPage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <BrowserRouter>
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route path="/user" element={<UserPage />} />
                  <Route path="/log-in" element={<LogInPage />} />
                 </Routes>
              </BrowserRouter>
            </div>);
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);