import React, { Component } from "react";

class NewBookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bookId: "",
        title: "",
        genre: "",
        author: "",
        year: 0,
        description: "",
        totalRatingScore: 0,
        numberOfRatings: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookId: this.state.bookId,
        title: this.state.title,
        genre: this.state.genre,
        author: this.state.author,
        year: this.state.year, 
        description: this.state.description,
        totalRatingScore: this.totalRatingScore,
        numberOfRatings: this.numberOfRatings,
      }),
    };
    fetch("/new-book", requestOptions)
      .then((response) => response.json())
      .then((data) => this.props.history.push("/book/" + data.bookId));
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    }

  render() {
    return (
      <div>
        <input
          type="text"
          variant="standard"
          name="bookId"
          value={this.state.bookId}
          onChange={this.handleChange}
        />
        <input
          type="text"
          variant="standard"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          variant="standard"
          name="genre"
          value={this.state.genre}
          onChange={this.handleChange}
        />
        <input
          type="text"
          variant="standard"
          name="author"
          value={this.state.author}
          onChange={this.handleChange}
        />
         <input
          type="number"
          name="year"
          value={this.state.year}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleSubmit}>
          Make book
        </button>
      </div>
    );
  }
}

export default NewBookPage;