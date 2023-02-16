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
        event.preventDefault()
        console.log('Søkeknapp funker')
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