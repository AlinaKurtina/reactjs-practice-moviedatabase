import Navigation from "../../components/layout/Navigation/Navigation";
import Footer from "../../components/layout/Footer/Footer";
import CastData from "./components/CastData/CastData";
import AsideData from "./components/AsideData/AsideData";
import MovieData from "./components/MovieData/MovieData";

import '../../styles/global.css';

function MovieDetailsPage() {
    return (
        <>
            <Navigation />
            <MovieData />
            <div className="flex-row-g20-center">
                <CastData />
                <AsideData />
            </div>
            <Footer />
        </>
    )
}

export default MovieDetailsPage;