import axios from "axios";


const axiosClient = axios.create({
  baseURL: `https://api.github.com/`,
});

function getGitHubUsers(user) {
  return axiosClient.get(`search/users?q=${user}`);
}

function getGitHubUser(login) {
  return axiosClient.get(`users/${login}`);
}

function getGitHubRepos(login) {
  return axiosClient.get(`users/${login}/repos`);
}

export { getGitHubUsers , getGitHubRepos, getGitHubUser};
