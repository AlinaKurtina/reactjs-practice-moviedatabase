import Footer from "@/components/layout/Footer/Footer";
import Navigation from "@/components/layout/Navigation/Navigation";
import QueryBar from "./components/QueryBar/QueryBar";
import SearchResults from "./components/SearchResults/SearchResults";
import { useGetMoviesViaSearchQuery } from "@/services/api";
import { useSearchParams } from "react-router";
import Loader from "@/components/common/Loader/Loader";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query")
  const { data, isLoading, error } = useGetMoviesViaSearchQuery({ str: query });

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    console.log(error);
  }

  const searchData = data?.results;

  return (
    <>
      <Navigation />
      <QueryBar prevQuery={query} />
      <SearchResults searchData={searchData} />
      <Footer />
    </>
  )
}

export default SearchPage;