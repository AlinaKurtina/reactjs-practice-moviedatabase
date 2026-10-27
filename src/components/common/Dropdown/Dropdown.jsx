import { useGetMoviesViaSearchQuery } from "@/services/api";
import styles from "./Dropdown.module.css";
import { Link } from "react-router";
import icon from "@/assets/hazard.png";
import gif from "@/assets/spinner.gif";

function Dropdown({ query, ref }) {
  const { data, isLoading, isError } = useGetMoviesViaSearchQuery({ str: query });

  if (isLoading) {
    return (
      <p className={styles.p}>
        <img src={gif} alt="loadingSpinner" ref={ref} width={22} height={22} />
        Loading...
      </p>
    );
  }

  if (isError) {
    return (
      <p className={styles.p}>
        <img src={icon} alt="errorIcon" ref={ref} /> Some has error occured!
      </p>
    );
  }

  return (
    <Link to={`/search?query=${query}`}>
      <ul className={styles.ul} ref={ref}>
        {data.results?.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </Link>
  );
}

export default Dropdown;
