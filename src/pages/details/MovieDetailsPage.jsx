import Navigation from "../../components/layout/Navigation/Navigation";
import Footer from "../../components/layout/Footer/Footer";
import CastData from "./components/CastData/CastData";
import AsideData from "./components/AsideData/AsideData";
import MovieData from "./components/MovieData/MovieData";

import { useGetMovieDetailsQuery } from "../../services/api";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Loader from "../../components/common/Loader/Loader";

function MovieDetailsPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetMovieDetailsQuery({ id });

if (error) {
  console.log(error)
}

if (isLoading) {
  return <Loader />
}

const movie = data;

return (
  <>
    <Navigation />
    <MovieData title={movie.title} date={movie.release_date}
      genres={movie.genres} duration={movie.runtime} overview={movie.overview}
      imgUrl={movie.poster_path}
    />
    <div className="flex-row-gS-center">
      <CastData />
      <AsideData />
    </div>
    <Footer />
  </>
)
}

export default MovieDetailsPage;