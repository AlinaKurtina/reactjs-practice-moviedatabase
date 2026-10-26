import { useState } from 'react';
import styles from './QueryBar.module.css';
import search_icon from '@/assets/search.png';
import { useNavigate } from 'react-router';

function QueryBar({ prevQuery }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate(`/search?query=${encodeURIComponent(inputValue)}`);
    }
  }

  return (
    <div className="container">
      <form className={styles.queryBar} onKeyDown={(e) => e.key === 'Enter' ? handleSearch(e) : null}>
        <img src={search_icon} width={20} height={20} className={styles.searchIcon} />
        <input
          name="query"
          type="text"
          placeholder={prevQuery ? `results for ${prevQuery}...` : `start searching...`}
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
      </form>
    </div>
  );
}

export default QueryBar;