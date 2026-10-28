import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${import.meta.env.VITE_API_KEY}`);
    },
  }),
  endpoints: (build) => ({
    getMovieList: build.query({
      query({ category, lang }) {
        return {
          url: `movie/${category}`,
          params: {
            language: lang,
          },
        };
      },
    }),
    getMovieDetails: build.query({
      query({ id, lang }) {
        return {
          url: `movie/${id}`,
          params: {
            language: lang,
          },
        };
      },
    }),
    getMovieKeywords: build.query({
      query({ id, lang }) {
        return {
          url: `movie/${id}/keywords`,
          params: {
            language: lang,
          },
        };
      },
    }),
    getMovieCast: build.query({
      query({ id, lang }) {
        return {
          url: `movie/${id}/credits`,
          params: {
            language: lang,
          },
        };
      },
    }),
    getMoviesViaSearch: build.query({
      query({ str, lang }) {
        return {
          url: "search/movie",
          params: {
            query: str,
            language: lang,
          },
        };
      },
    }),
  }),
});

export const {
  useGetMovieListQuery,
  useGetMovieDetailsQuery,
  useGetMovieKeywordsQuery,
  useGetMovieCastQuery,
  useGetMoviesViaSearchQuery,
} = api;
