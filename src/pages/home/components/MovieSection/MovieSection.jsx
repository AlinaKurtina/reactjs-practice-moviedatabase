import MovieCard from '../MovieCard/MovieCard.jsx';
import styles from './MovieSection.module.css';
import { useGetMovieListQuery } from '../../../../services/api.js';

function MovieSection({ category }) {
  const { data, isLoading, error } = useGetMovieListQuery({ category });

  if (error) {
    console.log(error);
  }

  return (
    <div className="container">
      <div className={styles.container}>
        <h3 className={styles.heading}>{category === 'top_rated' ? 'Top Rated' : category}</h3>
        <ul className={styles.list}>
          {data?.results?.map(movie => (
            <li key={movie.id}><MovieCard title={movie.title}
              date={movie.release_date} imgUrl={movie.poster_path} /></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieSection;