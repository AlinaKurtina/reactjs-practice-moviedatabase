import styles from './Search.module.css';
import search_icon from '@/assets/search.png';
import { debounce } from '@/utils/debounce';

import { useState } from 'react';
import { useNavigate } from 'react-router';

function Search({showQueryBar, setShowQueryBar}) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate(`/search?query=${encodeURIComponent(inputValue)}`);
    }
  }

  return (
    <>
      <form className="search" onSubmit={handleSearch} onKeyDown={(e) => e.key === "Enter" ? handleSearch : null}>
        <input
          className={styles.input}
          type="text"
          placeholder="Start looking for movies..."
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <button className={styles.button} type="submit">Search</button>
      </form>
      <button className={styles.searchButton} onClick={() => setShowQueryBar(!showQueryBar)}>
        <img src={search_icon} />
      </button>
    </>
  );
}

export default Search;