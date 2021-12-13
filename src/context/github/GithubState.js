import { SEARCH_USERS, CLEAR_USERS, SET_LOADING,GET_USER } from "../types";

import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import { useReducer } from "react";

const GithubState = (props) => {
  const initialState= {
    users:[],
    user:{},
    showLoading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user:state.user,
        showLoading: state.showLoading
      }}
      >
        {props.children}
      </GithubContext.Provider>
  )
}

export default GithubState;