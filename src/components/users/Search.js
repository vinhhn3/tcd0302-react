import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };
  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <h1>Search component</h1>
        <form className="form">
          <input
            type="text"
            name="text"
            placeholder="Seach by name"
            onChange={this.onChange}
            value={this.state.text}
          />
          <input
            type="submit"
            className="btn btn-dark btn-block"
            onClick={this.onSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Search;
