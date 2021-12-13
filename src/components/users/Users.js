import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import UserItem from "./UserItem";
import userStyle from "./Users.style";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { showLoading, usersData } = githubContext;
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
