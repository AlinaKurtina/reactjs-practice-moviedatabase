import { useGetMoviesViaSearchQuery } from "@/services/api";
import styles from "./Dropdown.module.css";
import { Link } from "react-router";
import icon from "@/assets/hazard.png";
import gif from "@/assets/spinner.gif";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Dropdown({ query, ref, setShowDropdown }) {
  const currentLang = useSelector((state) => state.lang.value);
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGetMoviesViaSearchQuery({
    str: query,
    lang: currentLang,
  });

  if (isLoading) {
    return (
      <p className={styles.p}>
        <img src={gif} alt="loadingSpinner" ref={ref} width={22} height={22} />
        {t('loading')}
      </p>
    );
  }

  if (isError) {
    return (
      <p className={styles.p}>
        <img src={icon} alt="errorIcon" ref={ref} />
       {t('error_mgs.went_wrong')}
      </p>
    );
  }

  return (
    <Link to={`/search?query=${query}`}>
      <ul className={styles.ul} ref={ref} onClick={() => setShowDropdown(false)}>
        {data.results.length !== 0 ? (
          data.results?.map((movie) => <li key={movie.id}>{movie.title}</li>)
        ) : (
          <p className={styles.noResults}>No results found.</p>
        )}
      </ul>
    </Link>
  );
}

export default Dropdown;
