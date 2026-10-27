import { useGetMoviesViaSearchQuery } from "@/services/api";
import styles from './Dropdown.module.css';
import { Link } from "react-router";
import icon from '@/assets/hazard.png';
import gif from '@/assets/spinner.gif'

function Dropdown({ query, ref }) {
  const { data, isLoading, isError } = useGetMoviesViaSearchQuery({ str: query });

  if (isLoading) {
    return (
      <div  className={styles.div}>
        <img src={gif} alt="loadingSpinner" width={22} height={22} />
        <p className={styles.p}>Loading...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className={styles.div}>
        <img src={icon} alt="errorIcon" ref={ref}/>
        <p className={styles.p}>Some has error occured!</p>
      </div>
    )
  }

  return (
    <Link to={`/search?query=${query}`}>
      <ul className={styles.ul} ref={ref}>
        {data.results?.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </Link>
  )
}

export default Dropdown;