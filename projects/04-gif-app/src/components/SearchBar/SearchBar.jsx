import { useState } from "react";
import "./SearchBar.scss";

export const SearchBar = ({ onNewSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() <= 1) return;
    //setCategories([...categories, inputValue]);
    onNewSearch(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="l-searchbar">
        <input
          className="c-searchbar"
          placeholder="Enter a Gif"
          type="text"
          value={inputValue}
          onChange={onInputChange}
        />
        <button onClick={onSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
    </form>
  );
};
