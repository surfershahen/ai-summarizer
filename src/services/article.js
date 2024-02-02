import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: headers => {
      headers.set(
        "X-RapidAPI-Key",
        "29562a4363msh48c965a511f1e9fp1b402fjsn3d49ac07403a"
      );
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: builder => ({
    getSummary: builder.query({
      query: params =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

//use useLazyGetSummaryQuery to call it once we press enter a URL
export const { useLazyGetSummaryQuery } = articleApi;
