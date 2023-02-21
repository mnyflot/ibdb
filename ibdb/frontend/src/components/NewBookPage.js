import React, { Component } from "react";

class NewBookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre: "",
      bookId: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleBookIdChange = this.handleBookIdChange.bind(this);
  }

  handleSubmit() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: this.state.title,
        genre: this.state.genre,
        bookId: this.state.bookId,
      }),
    };
    fetch("/new-book", requestOptions)
      .then((response) => response.json())
      .then((data) => this.props.history.push("/book/" + data.bookId));
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleGenreChange(event) {
    this.setState({ genre: event.target.value });
  }

  handleBookIdChange(event) {
    this.setState({ bookId: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          variant="standard"
          label="Title"
          name="title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <input
          type="text"
          variant="standard"
          label="Genre"
          name="genre"
          value={this.state.genre}
          onChange={this.handleGenreChange}
        />
        <input
          type="text"
          variant="standard"
          label="Book ID"
          name="bookId"
          value={this.state.bookId}
          onChange={this.handleBookIdChange}
        />
        <button type="button" onClick={this.handleSubmit}>
          Make book
        </button>
      </div>
    );
  }
}

export default NewBookPage;