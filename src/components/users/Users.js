import React, { useContext } from "react";
import UserItem from "./UserItem";
import userStyle from "./Users.style";
import GithubContext from "../../context/github/githubContext";


const Users = ({ showLoading }) => {
  const githubContext = useContext(GithubContext);

  if (showLoading) {
    return <h2>Fetching the data ...</h2>;
  }
  return (
    <div style={userStyle}>
      {githubContext.usersData.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
