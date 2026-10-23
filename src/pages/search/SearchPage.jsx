import QueryBar from "./components/QueryBar/QueryBar";
import SearchResults from "./components/SearchResults/SearchResults";
import SearchPageSkeleton from "./components/SearchPageSkeleton/SearchPageSkeleton";

import { useGetMoviesViaSearchQuery } from "@/services/api";
import { useSearchParams } from "react-router";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query")
  const { data, isLoading, error } = useGetMoviesViaSearchQuery({ str: query });

  if (isLoading) {
    return <SearchPageSkeleton />
  }

  if (error) {
    console.log(error);
  }

  const searchData = data?.results;

  return (
    <>
      <QueryBar prevQuery={query} />
      <SearchResults searchData={searchData} />
    </>
  )
}

export default SearchPage;