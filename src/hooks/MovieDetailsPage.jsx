import CastData from "@/pages/details/components/CastData/CastData";
import AsideData from "@/pages/details/components/AsideData/AsideData";
import MovieData from "@/pages/details/components/MovieData/MovieData";

import { useGetMovieCastQuery, useGetMovieDetailsQuery, useGetMovieKeywordsQuery } from "@/services/api";
import { useParams } from "react-router";
import ErrorMessage from "@/components/layout/ErrorMessage/ErrorMessage";
import MovieDetailsSkeleton from "./components/MovieDetailsSkeleton/MovieDetailsSkeleton";

function MovieDetailsPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetMovieDetailsQuery({ id });
  const {
    data: keywordData,
    isLoading: keywordsLoading,
    error: keywordsError
  } = useGetMovieKeywordsQuery({ id });
  const {
    data: castData,
    isLoading: castLoading,
    error: castError
  } = useGetMovieCastQuery({ id });

  if (error || keywordsError || castError) {
    return <ErrorMessage />
  }

  if (isLoading || keywordsLoading || castLoading) {
    return <MovieDetailsSkeleton />
  }

  const movie = data;
  const actorData = castData.cast.filter(castObj => castObj.known_for_department === 'Acting');

  return (
    <>
      <MovieData title={movie.title} date={movie.release_date}
        genres={movie.genres} duration={movie.runtime} overview={movie.overview}
        imgUrl={movie.poster_path} backdropUrl={movie.backdrop_path}
      />
      <div className="flex-row-gS-center">
        <CastData cast={actorData} />
        <AsideData status={movie.status} language={movie.spoken_languages[0]?.english_name} budget={movie.budget} keywords={keywordData.keywords} />
      </div>
    </>
  )
}

export default MovieDetailsPage;