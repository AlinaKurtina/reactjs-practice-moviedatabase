import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${import.meta.env.VITE_API_KEY}`);
    },
  }),
  endpoints: (build) => ({
    getMovieList: build.query({
      query({ category }) {
        return {
          url: `movie/${category}`,
        };
      },
    }),
    getMovieDetails: build.query({
      query({ id }) {
        return {
          url: `movie/${id}`,
        };
      },
    }),
    getMovieKeywords: build.query({
      query({ id }) {
        return {
          url: `movie/${id}/keywords`,
        };
      },
    }),
    getMovieCast: build.query({
      query({ id }) {
        return {
          url: `movie/${id}/credits`,
        };
      },
    }),
    getMoviesViaSearch: build.query({
      query({ str }) {
        return {
          url: "search/movie",
          params: {
            query: str,
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
