import React from "react";
import { Link } from "react-router-dom";

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
        <Link to={`/user/${login}`} className="btn btn-primary btn-sm">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
