import { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";

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
    name: "Vinh Hoang",
    age: 31,
    address: "658 Ngo Quyen",
    showName: false,
    showLoading: false,
  };

  increase = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  clearAge = () => {
    this.setState({
      age: (this.state.age = 0),
    });
  };

  decrease = () => {
    this.setState({
      age: this.state.age - 1,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    );
  }
}

export default App;
