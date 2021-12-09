import React, { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      alert("Input cannot be null");
    } else {
      props.searchUsers(text);
      setText("");
    }
  };

  const onClear = (event) => {
    event.preventDefault();
    props.clearUsers();
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
        {props.usersData.length > 0 ? (
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
