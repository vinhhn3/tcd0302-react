import React from "react";

const UserItem = ({ user }) => {
  const { avatar_url, login, html_url } = user;
  return (
    <div className="card text-center">
      <img
        alt="avatar"
        src={avatar_url}
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-primary btn-sm">
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
