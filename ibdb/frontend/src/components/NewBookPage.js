import React, { Component } from "react";

class NewBookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bookId: "",
        title: "",
        genre: "",
        author: "",
        year: 2023,
        description: "",
        totalRatingScore: 0,
        numberOfRatings: 0,
        imageURL: "",
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
        totalRatingScore: this.state.totalRatingScore,
        numberOfRatings: this.state.numberOfRatings,
        imageURL: this.state.imageURL,
      }),
    };
    fetch("/new-book", requestOptions)
      .then((response) => response.json())
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    }

  render() {
    return (
      <div className="newBookRegistration">
        <h3 className="categoryFrontpage">Legg til ny bok</h3>
        <hr className="underlineMakeNewBook"></hr>
        <p>BookID</p>
        <input
          type="text"
          variant="standard"
          name="bookId"
          value={this.state.bookId}
          onChange={this.handleChange}
        />
        <p>Tittel</p>
        <input
          type="text"
          variant="standard"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <p>Sjanger</p>
        <input
          type="text"
          variant="standard"
          name="genre"
          value={this.state.genre}
          onChange={this.handleChange}
        />
        <p>Forfatter</p>
        <input
          type="text"
          variant="standard"
          name="author"
          value={this.state.author}
          onChange={this.handleChange}
        />
        <p>Årstall</p>
         <input
          type="number"
          name="year"
          value={this.state.year}
          onChange={this.handleChange}
        />
        <p>Beskrivelse</p>
        <textarea
        rows="5"
        className="descriptionField"
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <p>TotalRatingScore</p>
        <input
          type="number"
          name="totalRatingScore"
          value={this.state.totalRatingScore}
          onChange={this.handleChange}
        />
        <p>NumberOfRatings</p>
        <input
          type="number"
          name="numberOfRatings"
          value={this.state.numberOfRatings}
          onChange={this.handleChange}
        />
        <p>Image URL</p>
        <input
          type="text"
          name="imageURL"
          value={this.state.imageURL}
          onChange={this.handleChange}
        />
        <button className="addBookButton" type="button" onClick={this.handleSubmit}>
          Legg til
        </button>
      </div>
    );
  }
}

export default NewBookPage;