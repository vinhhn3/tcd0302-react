import axios from "axios";
import { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    usersData: [],
    title: "TCD0302-React App",
    showLoading: true,
  };

  async componentDidMount() {
    this.setState({ showLoading: true });
    const response = await axios.get("https://api.github.com/users");
    console.log(response.data);
    this.setState({
      usersData: response.data,
      showLoading: false,
    });
  }

  render() {
    return (
      <div>
        <Navbar title={this.state.title} />
        <div className="container">
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
