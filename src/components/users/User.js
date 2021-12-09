import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  useEffect(() => {
    props.getUser(props.match.params.login);
  }, []);

  const {
    name,
    login,
    company,
    location,
    email,
    public_repos,
    public_gists,
    website,
    avatar_url,
    html_url,
    followers,
    following,
    bio,
    blog,
  } = props.user;

  return (
    <div>
      <>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        <div className="card grid">
          <div className="all-center">
            <img
              alt=""
              src={avatar_url}
              className="round-img"
              style={{ width: "50px" }}
            />
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
        </div>
        {bio && (
          <Fragment>
            <h3>Bio</h3>
            <p>{bio}</p>
          </Fragment>
        )}
        <a href={html_url} className="btn btn-dark my-1">
          Visit Github profile
        </a>
        <ul>
          <li>{login && <Fragment>Login id: {login}</Fragment>}</li>
          <li>{company && <Fragment>Company: {company}</Fragment>}</li>
          <li>{website && <Fragment>Website: {website}</Fragment>}</li>
          <li>{email && <Fragment>Email: {email}</Fragment>}</li>
        </ul>
      </>
      <div className="card card-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-danger">Public repos: {public_repos}</div>
        <div className="badge badge-white">Public gists: {public_gists}</div>
      </div>
    </div>
  );
};

export default User;
