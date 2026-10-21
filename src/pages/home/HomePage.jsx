import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import Carousel from "./components/Carousel/Carousel";
import MovieSection from "./components/MovieSection/MovieSection";

function HomePage() {
  const categories = ['popular', 'top_rated', 'upcoming'];

  return (
    <>
      <Navigation />
      <Carousel />
      {categories.map(cat => (
        <MovieSection key={cat} category={cat} />
      ))}
      <Footer />
    </>
  )
}

export default HomePage;