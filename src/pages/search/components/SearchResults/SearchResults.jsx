import ResultCard from '../ResultCard/ResultCard.jsx';
import styles from './SearchResults.module.css';

function SearchResults() {
    return (
        <div className="container">
            <ul className={styles.searchResults}>
                <li>
                    <ResultCard />
                </li>
                <li>
                    <ResultCard />
                </li>
                <li>
                    <ResultCard />
                </li>
                <li>
                    <ResultCard />
                </li>
            </ul>
        </div>
    );
}

export default SearchResults;