import { Link } from 'react-router';
import ResultCard from '../ResultCard/ResultCard.jsx';
import styles from './SearchResults.module.css';

function SearchResults({ searchData }) {
  return (
    <div className="container">
      <ul className={styles.searchResults}>
        {searchData.map(entry => (
          <li key={entry.id}>
            <Link to={`/movie/${entry.id}`}>
              <ResultCard title={entry.title} date={entry.release_date} overview={entry.overview} imgUrl={entry.poster_path} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;