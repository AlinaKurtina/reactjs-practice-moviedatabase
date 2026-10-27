import { useState } from "react";
import styles from "./QueryBar.module.css";
import search_icon from "@/assets/search.png";
import { useNavigate } from "react-router";
import Dropdown from "../Dropdown/Dropdown";
import { debounce } from "@/utils/debounce";
import { useOutsideClick } from "@/hooks/useOutsideClick";

function QueryBar() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useOutsideClick(() => setShowDropdown(false));

  function handleSearch(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate(`/search?query=${encodeURIComponent(inputValue)}`);
      setShowDropdown(false);
    }
  }

  return (
    <div className="container">
      <form
        className={styles.queryBar}
        onKeyDown={(e) => (e.key === "Enter" ? handleSearch(e) : null)}
        ref={ref}
      >
        <img src={search_icon} width={20} height={20} className={styles.searchIcon} />
        <input
          name="query"
          type="text"
          placeholder="Start searching..."
          className={styles.input}
          value={inputValue}
          onChange={(e) => {
            debounce(setInputValue(e.currentTarget.value));
            setShowDropdown(true);
          }}
        />
        {showDropdown && <Dropdown query={inputValue} ref={ref} />}
      </form>
    </div>
  );
}

export default QueryBar;
