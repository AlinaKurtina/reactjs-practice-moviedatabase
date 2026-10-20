import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import Carousel from "./components/Carousel/Carousel";
import MovieSection from "./components/MovieSection/MovieSection";

function HomePage() {
    return (
        <>
            <Navigation />
            <Carousel />
            <MovieSection />
            <MovieSection />
            <MovieSection />
            <Footer />
        </>
    )
}

export default HomePage;