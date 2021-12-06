import { Component } from "react";
import "./App.css";

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
        <h1>My name is: {this.state.showName && this.state.name}</h1>
        <h2>Address : {this.state.address}</h2>
        <p>My age: {this.state.age}</p>
        <button onClick={this.increase}>Increase my age</button>
        <button onClick={this.clearAge}>Clear my age</button>
        <button onClick={this.decrease}>Decrease my age</button>
        {this.state.showLoading ? (
          <h4>Loading ...</h4>
        ) : (
          <h4>No loading ...</h4>
        )}
      </div>
    );
  }
}

export default App;
