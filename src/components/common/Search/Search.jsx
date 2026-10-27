import styles from "./Search.module.css";
import search_icon from "@/assets/search.png";
import { debounce } from "@/utils/debounce";

import { useState } from "react";
import { useNavigate } from "react-router";
import Dropdown from "../Dropdown/Dropdown";
import { useOutsideClick } from "@/hooks/useOutsideClick";

function Search({ showQueryBar, setShowQueryBar }) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useOutsideClick(() => setShowDropdown(false));

  function handleSearch(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate(`/search?query=${encodeURIComponent(inputValue)}`);
    }
  }

  return (
    <>
      <form
        className={styles.searchForm}
        onSubmit={handleSearch}
        onKeyDown={(e) => (e.key === "Enter" ? handleSearch : null)}
      >
        <input
          className={styles.input}
          type="text"
          placeholder="Start looking for movies..."
          value={inputValue}
          onChange={(e) => {
            debounce(setInputValue(e.currentTarget.value));
            setShowDropdown(true);
          }}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
        {showDropdown && inputValue !== "" && <Dropdown query={inputValue} ref={ref} />}
      </form>
      <button className={styles.searchButton} onClick={() => setShowQueryBar(!showQueryBar)}>
        <img src={search_icon} />
      </button>
    </>
  );
}

export default Search;
