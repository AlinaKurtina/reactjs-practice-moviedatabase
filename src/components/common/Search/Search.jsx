import styles from './Search.module.css';

function Search() {
    return (
        <form className="search">
            <input 
                className={styles.input} 
                type="text" 
                placeholder="Start looking for movies..." 
            />
            <button className={styles.button} type="submit">Search</button>
        </form>
    );
}

export default Search;