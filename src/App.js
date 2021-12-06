import { Component } from "react";
import "./App.css";
import Age from "./components/Age";
import Name from "./components/Name";

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
        <Name name={this.state.name} />
        <Age age={this.state.age} />
        <Age age={this.state.age} />
        <Age age={this.state.age} />
        <Age age={this.state.age} />
        <Age age={this.state.age} />
      </div>
    );
  }
}

export default App;
