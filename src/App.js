import axios from "axios";
import { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

// function App() {
//   return (
//     <div className="App">
//       <p>Hello React</p>
//       <p>This is a simple React Application</p>
//     </div>
//   );
// }

class App extends Component {
  state = {
    usersData: [],
  };

  componentDidMount() {
    console.log("Component App.js is mounted ...");
    axios.get("https://api.github.com/users").then((response) => {
      console.log(response.data);
      this.setState({
        usersData: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}

export default App;
