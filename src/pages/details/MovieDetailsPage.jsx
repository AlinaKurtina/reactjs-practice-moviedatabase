import Navigation from "@/components/layout/Navigation/Navigation";
import Footer from "@/components/layout/Footer/Footer.jsx";
import CastData from "@/pages/details/components/CastData/CastData";
import AsideData from "@/pages/details/components/AsideData/AsideData";
import MovieData from "@/pages/details/components/MovieData/MovieData";

import { useGetMovieCastQuery, useGetMovieDetailsQuery, useGetMovieKeywordsQuery } from "@/services/api";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Loader from "@/components/common/Loader/Loader";

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
    console.log(error);
    console.log(keywordsError);
  }

  if (isLoading || keywordsLoading || castLoading) {
    return <Loader />
  }

  const movie = data;
  const actorData = castData.cast.filter(castObj => castObj.known_for_department === 'Acting');

  return (
    <>
      <Navigation />
      <MovieData title={movie.title} date={movie.release_date}
        genres={movie.genres} duration={movie.runtime} overview={movie.overview}
        imgUrl={movie.poster_path}
      />
      <div className="flex-row-gS-center">
        <CastData cast={actorData} />
        <AsideData status={movie.status} language={movie.spoken_languages[0].english_name} budget={movie.budget} keywords={keywordData.keywords} />
      </div>
      <Footer />
    </>
  )
}

export default MovieDetailsPage;