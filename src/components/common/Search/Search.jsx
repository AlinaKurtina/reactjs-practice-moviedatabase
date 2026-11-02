import styles from "./Search.module.css";
import search_icon from "@/assets/search.png";
import { debounce } from "@/utils/debounce";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Dropdown from "../Dropdown/Dropdown";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import Backdrop from "../Backdrop/Backdrop";
import { Trans, useTranslation } from "react-i18next";

function Search({ showQueryBar, setShowQueryBar }) {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useOutsideClick(() => setShowDropdown(false));
  const delayedSearch = useMemo(() => debounce((value) => setInputValue(value), 300), []);

  function handleSearch(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate(`/search?query=${encodeURIComponent(inputValue)}`);
    }
  }

  useEffect(() => {
    return () => delayedSearch.cancel();
  }, [delayedSearch]);

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
          placeholder={`${t("search")}`}
          onChange={(e) => {
            delayedSearch(e.currentTarget.value);
            setShowDropdown(true);
          }}
        />
        <button className={styles.button} type="submit">
          <Trans i18nKey="search_button">{t("search_button")}</Trans>
        </button>
        {showDropdown && inputValue !== "" && <Dropdown query={inputValue} ref={ref} />}
      </form>
      <button
        className={styles.searchButton}
        onClick={() => setShowQueryBar(!showQueryBar)}
        popoverTarget="popoverSearch"
      >
        <img src={search_icon} alt="searchIcon" />
      </button>
      {showQueryBar && <Backdrop />}
    </>
  );
}

export default Search;
