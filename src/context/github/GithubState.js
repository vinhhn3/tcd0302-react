import { useReducer } from "react";
import {
  getGitHubRepos,
  getGitHubUser,
  getGitHubUsers,
} from "../../api/GithubApi";
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

const GithubState = (props) => {
  const initialState = {
    usersData: [],
    user: {},
    showLoading: false,
    title: "TCD0302-ReactApp-Context",
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const response = await getGitHubUsers(text);
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  const getUser = async (login) => {
    const response = await getGitHubUser(login);
    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  };

  const getRepos = async (login) => {
    const response = await getGitHubRepos(login);
    dispatch({
      type: GET_REPOS,
      payload: response.data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        usersData: state.usersData,
        user: state.user,
        showLoading: state.showLoading,
        title: state.title,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
