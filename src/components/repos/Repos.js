import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import RepoItem from "./RepoItem";

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;
  return (
    <div>
      <h3>Public repos</h3>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
