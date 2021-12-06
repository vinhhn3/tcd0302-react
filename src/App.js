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
    usersData: [
      {
        login: "mojombo",
        id: 1,
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        login: "defunkt",
        id: 2,
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt",
      },
      {
        login: "pjhyett",
        id: 3,
        avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Users usersData={this.state.usersData} />
      </div>
    );
  }
}

export default App;
