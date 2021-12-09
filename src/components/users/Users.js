import React, { Component } from "react";
import UserItem from "./UserItem";
import userStyle from "./Users.style";

class Users extends Component {
  componentDidMount() {
    console.log("Users component is mounted ...");
  }
  render() {
    return (
      <div style={userStyle}>
        {this.props.usersData.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
        <p style={userStyle.title}>This is a test</p>
      </div>
    );
  }
}

export default Users;
