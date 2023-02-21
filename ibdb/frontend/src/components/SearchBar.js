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
    }

    handleSubmit(event) {
        event.preventDefault();
        let search = this.state.search
        search = search.split(" ");
        search = search.join("+");
        search = "/search/" + search;
        window.location.href=search;
    }

    render() {
        return (
            <div className='searchBar'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input className='searchField' type="text" name="search" value={this.state.search} onChange={this.handleChange} />
                    </label>
                    <input className='buttonDefault' type="submit" value="Search" />
                </form>
            </div>
        );
    }
}

export default SearchBar;