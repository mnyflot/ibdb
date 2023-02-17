import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {search: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state.search);
    }

    handleSubmit(event) {
        event.preventDefault();
        let search = this.state.search
        search = search.split(" ");
        search = search.join("+");
        console.log(search);
        search = "/search=" + search;
        console.log(search);
        window.location.href=search;
    }

    render() {
        return (
            <div className='searchBar'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SearchBar;