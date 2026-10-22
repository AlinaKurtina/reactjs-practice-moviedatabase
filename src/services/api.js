import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi(
  {
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.themoviedb.org/3/movie/',
      prepareHeaders: (headers) => {
        headers.set('authorization', `Bearer ${import.meta.env.VITE_API_KEY}`)
      }
    }),
    endpoints: (build) => ({
      getMovieList: build.query({
        query({ category }) {
          return {
            url: `${category}`,
          }
        }
      }),
      getMovieDetails: build.query({
        query({ id }) {
          return {
            url: `${id}`,
          }
        }
      }),
      getMovieKeywords: build.query({
        query({ id }) {
          return {
            url: `${id}/keywords`,
          }
        }
      }),
      getMovieCast: build.query({
        query({ id }) {
          return {
            url: `${id}/credits`,
          }
        }
      })
      // getViaSerach,
    })
  }
)

export const { useGetMovieListQuery, useGetMovieDetailsQuery, useGetMovieKeywordsQuery, useGetMovieCastQuery } = api;
