import styles from './Search.module.css';
import search_icon from '../../../assets/search.png'

function Search() {
  return (
    <>
      <form className="search">
        <input
          className={styles.input}
          type="text"
          placeholder="Start looking for movies..."
        />
        <button className={styles.button} type="submit">Search</button>
      </form>
      <button className={styles.searchButton}>
        <img src={search_icon} />
      </button>
    </>
  );
}

export default Search;