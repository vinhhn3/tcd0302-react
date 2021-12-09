import React from "react";
import UserItem from "./UserItem";
import userStyle from "./Users.style";

const Users = ({ usersData, showLoading }) => {
  if (showLoading) {
    return <h2>Fetching the data ...</h2>;
  }
  return (
    <div style={userStyle}>
      {usersData.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
