import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import QueryBar from "./components/QueryBar/QueryBar";
import SearchResults from "./components/SearchResults/SearchResults";
import '../../styles/global.css';

function SearchPage() {
    return (
        <>
            <Navigation />
            <QueryBar />
            <SearchResults />
            <Footer />
        </>
    )
}

export default SearchPage;