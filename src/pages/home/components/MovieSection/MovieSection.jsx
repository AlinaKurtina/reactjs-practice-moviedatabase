import MovieCard from '../MovieCard/MovieCard.jsx';
import styles from './MovieSection.module.css';
import { useGetMovieListQuery } from '../../../../services/api.js';
import Loader from '../../../../components/common/Loader/Loader.jsx';
import { useDispatch } from 'react-redux';
import { setCurrentMovieId } from '../../../../store/movieSlice.js';

import { Link } from 'react-router';

function MovieSection({ category }) {
  const { data, isLoading, error } = useGetMovieListQuery({ category });
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="container">
      <div className={styles.container}>
        <h3 className={styles.heading}>{category === 'top_rated' ? 'Top Rated' : category}</h3>
        <ul className={styles.list}>
          {data?.results?.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <MovieCard title={movie.title}
                  date={movie.release_date} imgUrl={movie.poster_path} handleClick={() => {
                    dispatch(setCurrentMovieId(movie.id));
                    console.log('i swear ive worked')
                  }} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieSection;