import axios from "axios";
import { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    usersData: [],
    title: "TCD0302-React App",
    showLoading: false,
  };

  searchUsers = async (text) => {
    this.setState({ showLoading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({
      usersData: response.data.items,
      showLoading: false,
    });
  };

  clearUsers = () => {
    console.log("clearUsers clicked on App.js...");
    this.setState({
      usersData: [],
    });
  };

  render() {
    return (
      <div>
        <Navbar title={this.state.title} />
        <div className="container">
          <Search
            clearUsers={this.clearUsers}
            searchUsers={this.searchUsers}
            usersData={this.state.usersData}
          />
          <Users
            usersData={this.state.usersData}
            showLoading={this.state.showLoading}
          />
        </div>
      </div>
    );
  }
}

export default App;
