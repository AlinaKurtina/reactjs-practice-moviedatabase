import styles from './QueryBar.module.css';
import search_icon from '@/assets/search.png';

function QueryBar({ prevQuery }) {
  return (
    <div className="container">
      <form action="" method="get" className={styles.queryBar}>
        <img src={search_icon} width={20} height={20} className={styles.searchIcon} />
        <input
          name="queryBar"
          type="text"
          placeholder={`results for ${prevQuery}..`}
          className={styles.input}
        />
      </form>
    </div>
  );
}

export default QueryBar;