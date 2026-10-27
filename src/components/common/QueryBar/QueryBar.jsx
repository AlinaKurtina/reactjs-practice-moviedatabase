import { useState } from 'react';
import styles from './QueryBar.module.css';
import search_icon from '@/assets/search.png';
import { useNavigate } from 'react-router';
import Dropdown from '../Dropdown/Dropdown';
import { debounce } from '@/utils/debounce';

function QueryBar({ ref }) {
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
      <form className={styles.queryBar} onKeyDown={(e) => e.key === 'Enter' ? handleSearch(e) : null} ref={ref}>
        <img src={search_icon} width={20} height={20} className={styles.searchIcon} />
        <input
          name="query"
          type="text"
          placeholder="Start searching..."
          className={styles.input}
          value={inputValue}
          onChange={(e) => debounce(setInputValue(e.currentTarget.value))}
        />
        {inputValue && <Dropdown query={inputValue} />}
      </form>
    </div>
  );
}

export default QueryBar;