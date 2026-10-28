import { Link } from "react-router";
import ResultCard from "../ResultCard/ResultCard.jsx";
import styles from "./SearchResults.module.css";
import { dateFormatter } from "@/utils/dateFormatter.js";

function SearchResults({ searchData }) {
  return (
    <div className="container">
      <ul className={styles.searchResults}>
        {searchData.length !== 0 ? (
          searchData.map((entry) => (
            <li key={entry.id}>
              <Link to={`/movie/${entry.id}`}>
                <ResultCard
                  title={entry.title}
                  date={dateFormatter(entry.release_date)}
                  overview={entry.overview}
                  imgUrl={entry.poster_path}
                />
              </Link>
            </li>
          ))
        ) : (
          <p className={styles.noResults}>Sorry, no results for this one ;( </p>
        )}
      </ul>
    </div>
  );
}

export default SearchResults;
