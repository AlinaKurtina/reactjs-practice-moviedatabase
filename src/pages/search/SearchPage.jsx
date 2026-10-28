import SearchResults from "./components/SearchResults/SearchResults";
import SearchPageSkeleton from "./components/SearchPageSkeleton/SearchPageSkeleton";

import { useGetMoviesViaSearchQuery } from "@/services/api";
import { useSearchParams } from "react-router";
import { useSelector } from "react-redux";

function SearchPage() {
  const currentLang = useSelector((state) => state.lang.value);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data, isLoading, error } = useGetMoviesViaSearchQuery({ str: query, lang: currentLang });

  if (isLoading) {
    return <SearchPageSkeleton />;
  }

  if (error) {
    console.log(error);
  }

  const searchData = data?.results;

  return (
    <>
      <SearchResults searchData={searchData} />
    </>
  );
}

export default SearchPage;
