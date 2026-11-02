import { useEffect, useState } from "react";
import styles from "./QueryBar.module.css";
import search_icon from "@/assets/search.png";
import { useNavigate } from "react-router";
import Dropdown from "../Dropdown/Dropdown";
import { debounce } from "@/utils/debounce";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useTranslation } from "react-i18next";

function QueryBar({ ref, setShowQueryBar }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const refDropdown = useOutsideClick(() => setShowDropdown(false));
  const { t } = useTranslation();
  const delayedSearch = useMemo(() => debounce((value) => setInputValue(value), 300), []);

  function handleSearch(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate(`/search?query=${encodeURIComponent(inputValue)}`);
      setShowDropdown(false);
      setShowQueryBar(false);
    }
  }

  useEffect(() => {
    return () => delayedSearch.cancel();
  }, [delayedSearch])

  return (
    <>
      <div className="container">
        <form
          className={styles.queryBar}
          onKeyDown={(e) => (e.key === "Enter" ? handleSearch(e) : null)}
          ref={ref}
          popover
          id="popoverSearch"
        >
          <img src={search_icon} width={20} height={20} className={styles.searchIcon} />
          <input
            name="query"
            type="text"
            placeholder={t("search")}
            className={styles.input}
            onChange={(e) => {
              delayedSearch(e.currentTarget.value);
              setShowDropdown(true);
            }}
          />
          {showDropdown && (
            <Dropdown query={inputValue} ref={refDropdown} setShowDropdown={setShowDropdown} />
          )}
        </form>
      </div>
    </>
  );
}

export default QueryBar;
