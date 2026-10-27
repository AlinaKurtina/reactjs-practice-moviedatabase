import Carousel from "./components/Carousel/Carousel";
import MovieSection from "./components/MovieSection/MovieSection";

function HomePage() {
  const categories = ["popular", "top_rated", "upcoming"];

  return (
    <>
      <Carousel />
      {categories.map((cat) => (
        <MovieSection key={cat} category={cat} />
      ))}
    </>
  );
}

export default HomePage;
