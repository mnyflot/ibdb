import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link, Redirect, } from "react-router-dom";
import axios from "axios";

import HomePage from "./components/HomePage";
import LogInPage from "./components/LogInPage";
import SearchResultsPage from "./components/SearchResultsPage";
import UserPage from "./components/UserPage";
import Book from "./components/Book"
import NewBookPage from "./components/NewBookPage"
import ReviewPage from "./components/ReviewPage";

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
                  <Route path="/user/:username" element={<UserPage />} />
                  <Route path="/log-in" element={<LogInPage />} />
                  <Route path="/book/:bookId" element={<Book />} />
                  <Route path="/create-book" element={<NewBookPage />} />
                  <Route path="/search_results" element={<SearchResultsPage />} />
                  <Route path="/review/:bookId" element={<ReviewPage />} />
                 </Routes>
              </BrowserRouter>
            </div>);
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
