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
    if (this.state.text === "") {
      alert("Input cannot be null");
    } else {
      console.log(this.state.text);
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  onClear = (event) => {
    event.preventDefault();
    this.props.clearUsers();
  };

  render() {
    return (
      <div>
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
          {this.props.usersData.length > 0 ? (
            <button onClick={this.onClear} className="btn btn-light btn-block">
              Clear
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}

export default Search;
