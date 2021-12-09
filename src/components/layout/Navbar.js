import React from "react";

// class Navbar extends Component {
//   render() {
//     return (
//       <div className="navbar bg-primary">
//         <h1>TCD0302 React</h1>
//       </div>
//     );
//   }
// }

const Navbar = ({ title }) => {
  // const title = props.title;
  return (
    <div className="navbar bg-primary">
      <h1>{title}</h1>
    </div>
  );
};

export default Navbar;
