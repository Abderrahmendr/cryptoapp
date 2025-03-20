import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-rapidapi-key': 'a6c4083953msh16f9aeee7d7d096p138cfajsnee070ccbda7e',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'X-BingApis-SDK': 'true'
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
             query: ({ newsCategory, count }) => createRequest(`/news/search?q=&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;