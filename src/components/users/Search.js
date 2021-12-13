import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const [text, setText] = useState("");
  const githubContext = useContext(GithubContext);
  const { usersData, searchUsers, clearUsers } = githubContext;

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      alert("Input cannot be null");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onClear = (event) => {
    event.preventDefault();
    clearUsers();
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          name="text"
          placeholder="Seach by name"
          onChange={onChange}
          value={text}
        />

        <input
          type="submit"
          className="btn btn-dark btn-block"
          onClick={onSubmit}
        />
        {usersData.length > 0 ? (
          <button onClick={onClear} className="btn btn-light btn-block">
            Clear
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Search;
