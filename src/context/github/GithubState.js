import axios from "axios";
import { useReducer } from "react";
import { SEARCH_USERS } from "../types";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

const GithubState = (props) => {
  const initialState = {
    usersData: [],
    user: {},
    showLoading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    // setShowLoading(true);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
    // setShowLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        usersData: state.usersData,
        user: state.user,
        showLoading: state.showLoading,
        searchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;