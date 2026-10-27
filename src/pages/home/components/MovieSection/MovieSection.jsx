import MovieCard from "../MovieCard/MovieCard.jsx";
import styles from "./MovieSection.module.css";
import { useGetMovieListQuery } from "@/services/api.js";
import ErrorMessage from "@/components/layout/ErrorMessage/ErrorMessage.jsx";

import { Link } from "react-router";
import HomePageSkeleton from "../HomePageSkeleton/HomePageSkeleton.jsx";

function MovieSection({ category }) {
  const { data, isLoading, isError } = useGetMovieListQuery({ category });

  if (isLoading) {
    return <HomePageSkeleton />;
  }

  if (isError) {
    <ErrorMessage />;
  }

  return (
    <div className="container">
      <div className={styles.container}>
        <h3 className={styles.heading}>{category === "top_rated" ? "Top Rated" : category}</h3>
        <ul className={styles.list}>
          {data?.results?.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <MovieCard
                  title={movie.title}
                  date={movie.release_date}
                  imgUrl={movie.poster_path}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieSection;
